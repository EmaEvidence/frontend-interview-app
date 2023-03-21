import React from 'react'
import { CBType } from '../types'
import StepInput from './StepInput'

interface AgeStepProps {
  cb: CBType
}

export const AgeStep: React.FC<AgeStepProps> = (props) => {
  return (
    <>
      <StepInput
        label="Age"
        cb={(field: string, value: string) => {
          props.cb(field, Number(value))
        }}
        value=""
        type="number"
        isRequired={true}
        name={'age'}
        pattern="[0-9]{1,3}"
        errorText={'Please enter your age to continue!'}
      />
    </>
  )
}

export default AgeStep
