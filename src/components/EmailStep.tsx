import React from 'react'
import { CBType } from '../types'
import StepInput from './StepInput'

interface EmailStepProps {
  cb: CBType
}

export const EmailStep: React.FC<EmailStepProps> = (props) => {
  return (
    <>
      <StepInput
        label="Email"
        cb={(field: string, value: string) => {
          props.cb(field, value)
        }}
        value=""
        type="email"
        isRequired={true}
        name={'email'}
        pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
        errorText={'Please enter your Email to continue!'}
      />
    </>
  )
}

export default EmailStep
