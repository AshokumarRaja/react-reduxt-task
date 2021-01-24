import React from 'react'
import { Form } from 'react-final-form'
import Input from '../Input/Input'
import Select from '../Select'
import { FormSpy } from "react-final-form";
import { Country } from '../../constants/CoutryConstants'
import { States } from '../../constants/StateConstants';
import { savedata } from '../../Action/formAction'
import { store } from '../../reducers/store'
import './Form1.css'
const Form1 = () => {
    var result = [];
    const onSubmit = values => {
        Object.keys(values).map((key) => result.push([key, values[key]])); // object are convert to Array
        const ShowTable = document.getElementById("showTable");
        ShowTable.innerHTML = " ";
        var result1 = " ";
        result.map((res) => {
            return result1 += "<p>" + res[0] + " : " + res[1] + "</p>"; //Array values stored in result
        })
        ShowTable.innerHTML = result1 // values are showed in ShowTable
    };
    const required = value => (value ? undefined : 'Field Is Required')
    return (
        <>
            <div className="form-content">
                <Form onSubmit={onSubmit} >
                    {({ handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <h3>Shipping Address</h3>
                            <Input type="text" name="Name" placeholder="Name" label="Name" validate={required} />
                            <Input type="text" name="Address" placeholder="Address" label="Address" validate={required} />
                            <Input type="text" name="City" placeholder="City" label="City" validate={required} />
                            <Select name="Country" options={Country} label="Country" validate={required} />
                            <Select name="States" options={States} label="States" validate={required} />
                            <Input type="number" name="PinCode" placeholder="PinCode" label="PinCode" validate={required} />
                            <Input type="Number" name="Phone" label="Phone" placeholder="Phone" validate={required} />
                            <button type="submit" >Ship To This Address</button>
                            <FormSpy  onChange={(state) => store.dispatch(savedata(state.values))} />
                             {/* dispatch on everytime form value changes*/} 
                        </form>
                    )}
                </Form>
            </div>
            <div id="showTable"></div>
        </>
    )
}

export default Form1
