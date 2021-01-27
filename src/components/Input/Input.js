import React from 'react'
import './Input.css';
import { Field } from 'react-final-form'
import { connect } from 'react-redux'
import {getFormState} from '../../reducers/formReducer'
const Input = (props) => {
    const { label, name, validate, values, ...rest } = props;
 
    return (
        <Field className="form-control" name={name} label={label} {...rest} validate={validate} >
            {({ input, meta, placeholder, className }) => (
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} value={values[name]} />
                    {meta.error && meta.touched && <span>{meta.error}</span>} {/*Show Error Messge*/}
                </div>
            )}
        </Field>
    )
}
export default connect((state) => ({ values: getFormState(state) }))(Input)
