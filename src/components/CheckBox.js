import React from 'react'
import { Field } from 'react-final-form'
const CheckBox = (props) => {
    const { label, name, validate, values, ...rest } = props;
    return (
        <Field className="form-control" name={name} label={label} {...rest} validate={validate} >
            {({ input, meta, placeholder, className }) => (
                <div className={className}>
                    <input {...input} placeholder={placeholder} />
                    <label>{label}</label>
                    {meta.error && meta.touched && <span>{meta.error}</span>} {/*Show Error Messge*/}
                </div>
            )}
        </Field>
    )
}

export default CheckBox
