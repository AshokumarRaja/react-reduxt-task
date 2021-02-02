import React, { useState } from 'react'
import { Form } from 'react-final-form'
import Input from '../Input/Input'
import Select from '../Select'
import { Country } from '../../constants/CoutryConstants'
import { States } from '../../constants/StateConstants';
import FormState from '../../formState';
import { required, minLength, composeValidators } from '../../validation/formValidation';
import { initialValues, Pincode } from '../../constants/InitalValuesConstant'
import createDecorator from 'final-form-focus'
import CheckBox from '../CheckBox';
import Button from '../Button/Button'
import { FORM_ERROR } from 'final-form'
import axios from 'axios'
import formatString from "format-string-by-pattern";
import './Form1.css'
/**
 * @param value - Array of Form Values stored
 * @param values - returned form values
 * @param focusonError - highlight first error
 * @param loading -loaind spinner after form submission
 * @returns {FORM_ERROR} -returns response form submission
 */
const Form1 = () => {
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const focusonError = createDecorator();
    const onSubmit = (values) => {
        setLoading(true);
        if (values.States === 'kerala') {
            setLoading(false)
            return { [FORM_ERROR]: 'Shipping Not Available in Kerala' }
        }
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                setLoading(false)
                Object.keys(values).map((key) => setValue(prevstate => [...prevstate, [key, values[key]]]));
            })
        }, [2000])
    };
    return (
        <>
            <Form onSubmit={onSubmit} decorators={[focusonError]} initialValues={initialValues}>
                {({ handleSubmit, submitting, pristine, form, values, submitError }) => (
                    <form onSubmit={handleSubmit}>
                        <FormState />
                        {submitError && <div className="error">{submitError}</div>}
                        <div className="form-content">
                            <h3>Shipping Address</h3>
                            <Input type="text" name="Name" placeholder="Name" label="Name" validate={required} />
                            <Input type="text" name="Address" placeholder="Address" label="Address" validate={required} />
                            <Input type="text" name="City" placeholder="City" label="City" validate={required} />
                            <Select name="Country" options={Country} label="Country" validate={required} />
                            <Select name="States" options={States} label="States" validate={required} />
                            <Input type="text" name="PinCode" placeholder="PinCode" label="PinCode" validate={required} parse={formatString(Pincode.parse)} />
                            <Input type="Number" name="Phone" label="Phone" placeholder="Phone" validate={composeValidators(required, minLength(10))} />
                            <CheckBox type="checkbox" name="Checkbox" label="Check if Shipping and Billing address are diiferent" validate={required} />
                            <Button submitting={submitting} pristine={pristine} loading={loading} type="submit" />
                            <button type="reset" disabled={submitting || pristine} onClick={form.reset}>Reset</button>
                        </div>
                    </form>
                )}
            </Form>
            <div id="showTable">
                {value.map((val) => {
                    return <p key={val}>{`${val[0]} : ${val[1]} `}</p>
                })}
            </div>
        </>
    )
}
export default Form1;