import React, { useState } from 'react'
import { Form } from 'react-final-form'
import Input from '../Input/Input'
import Select from '../Select'
import { Country } from '../../constants/CoutryConstants'
import { States } from '../../constants/StateConstants';
import FormState from '../../formState';
import { required, minLength, composeValidators } from '../../validation/formValidation';
import { initialValues } from '../../constants/InitalValuesConstant'
import createDecorator from 'final-form-focus'
import CheckBox from '../CheckBox'
import { FORM_ERROR } from 'final-form'
import './Form1.css'
/**
 * @param value - Array of Form Values stored
 * @param values - returned form values
 * @param focusonError - highlight first error
 * @returns {FORM_ERROR} -returns response form submission
 */
const Form1 = () => {
    const [value, setValue] = useState([]);
    const focusonError = createDecorator();
    const onSubmit = values => {
        if (values.States == 'kerala') {
            return { [FORM_ERROR]: 'Shipping Not Available in Kerala' }
        }
        Object.keys(values).map((key) => setValue(prevstate => [...prevstate, [key, values[key]]]));
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
                            <Input type="number" name="PinCode" placeholder="PinCode" label="PinCode" validate={required} />
                            <Input type="Number" name="Phone" label="Phone" placeholder="Phone" validate={composeValidators(required, minLength(10))} />
                            <CheckBox type="checkbox" name="Checkbox" label="Check if Shipping and Billing address are diiferent" />
                            <button type="submit" disabled={submitting || pristine} >Ship To This Address</button>
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