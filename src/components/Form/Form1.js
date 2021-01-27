import React, { useState } from 'react'
import { Form } from 'react-final-form'
import Input from '../Input/Input'
import Select from '../Select'
import { Country } from '../../constants/CoutryConstants'
import { States } from '../../constants/StateConstants';
import FormStateToRedux from '../../FormStateToRedux'
import './Form1.css'
const Form1 = () => {
    const [value, setValue] = useState([]);
    const onSubmit = values => {
        Object.keys(values).map((key) => setValue(prevstate => [...prevstate, [key, values[key]]]));
    };
    const required = value => (value ? undefined : 'Field Is Required');
    const minLength = min => value =>isNaN(value) || value.length > min ? 'Enter Only 10 Numbers':value.length<min ?'Enter atleast 10 Numbers':undefined ;
    const composeValidators = (...validators) => value =>validators.reduce((error, validator) => error || validator(value), undefined)
    return (
        <>
            <div className="form-content">
                <Form onSubmit={onSubmit} >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                             <FormStateToRedux  />
                            <h3>Shipping Address</h3>
                            <Input type="text" name="Name" placeholder="Name" label="Name" validate={required} />
                            <Input type="text" name="Address" placeholder="Address" label="Address" validate={required} />
                            <Input type="text" name="City" placeholder="City" label="City" validate={required} />
                            <Select name="Country" options={Country} label="Country" validate={required} />
                            <Select name="States" options={States} label="States" validate={required} />
                            <Input type="number" name="PinCode" placeholder="PinCode" label="PinCode" validate={required} />
                            <Input type="Number" name="Phone" label="Phone" placeholder="Phone"  validate={composeValidators(required, minLength(10))} />
                            <button type="submit" >Ship To This Address</button>
                            
                        </form>
                    )}
                </Form>
            </div>
            <div id="showTable">
                {value.map((val) => {
                    return <p key={val}>{`${val[0]} : ${val[1]} `}</p>
                })}
            </div>
        </>
    )
}

export default Form1;
