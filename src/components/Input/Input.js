import React from 'react'
import './Input.css';
import { Field } from 'react-final-form'
import { connect } from 'react-redux'
import { getFormState } from '../../reducers/formReducer'
/**
 * @param name - input name ,props received by default
 * @param label -label ,props received by default
 * @param validate - input validation  ,props received by default
 * @param values -received from redux
 * @param rest -received input values ,props received by default
 */
const Input = (props) => {
    const { label, name, validate, values, ...rest } = props;
    return (
        <Field className="form-control" name={name} label={label} {...rest} validate={validate} >
            {({ input, meta, placeholder, className }) => (
                <div className={`${className} ${meta.active ? 'active' : ''}`}>
                    <label>{label}</label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>} {/*Show Error Messge*/}
                </div>
            )}
        </Field>
    )
}
export default connect((state) => ({ values: getFormState(state) }))(Input)
