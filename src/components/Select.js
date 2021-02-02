import React from 'react'
import { Field } from 'react-final-form'
import './Input/Input.css'
/**
 * @param name - input name ,props received by default
 * @param label -label ,props received by default
 * @param validate - input validation  ,props received by default
 * @param values -received from redux
 * @param rest -received input values ,props received by default
 * @param options -Array of Country and States
 */
const Select = (props) => {
    const { name, options, label, validate} = props;
    return (
        <Field name={name} options={options} className="form-control" label={label} validate={validate}>
            { ({ input, meta, options, className }) => {

                return (
                    <div className={`${className} ${meta.active ? 'active' : ''}`} >
                        <label>{label}</label>
                        <select name={name} onChange={(value) => input.onChange(value)} {...input} >
                            {options.map((x) => {
                                return (
                                    <option key={x.key} value={x.value} >{x.text}</option>
                                )
                            })}
                        </select>
                        {meta.error && meta.touched && <span>{meta.error}</span>} {/*Show Error Message*/}
                    </div>
                )
            }}
        </Field>
    )
}
export default Select;

