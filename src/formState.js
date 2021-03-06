import React from 'react'
import { connect } from 'react-redux'
import { FormSpy } from 'react-final-form'
import { savedata } from './Action/formAction'

const FormState = ({ savedata }) => (
    <FormSpy onChange={state => savedata(state.values)} />
)

export default connect(undefined, { savedata })(FormState)
