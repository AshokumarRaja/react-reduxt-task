import React from 'react'
import { Field } from 'react-final-form'
import { connect } from 'react-redux'
import { getFormState } from '../reducers/formReducer'
const Select = (props) => {
    const { name, options, label, validate, values } = props;
    return (
        <Field name={name} options={options} className="form-control" label={label} validate={validate}>
            { ({ input, meta, options, className }) => {
                return (
                    <div className={`${className} ${meta.active ? 'active':''}`} >
                        <label>{label}</label>
                        <select name={name} onChange={(value) => input.onChange(value)} value={values[name]}>
                            {options.map((x) => {
                                return (
                                    <option key={x.key} value={x.value}>{x.text}</option>
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
export default connect((state) => ({ values: getFormState(state) }))(Select)

