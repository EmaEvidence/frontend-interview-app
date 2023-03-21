import React from 'react'
import StepInput from './StepInput'

interface AgeStepProps {
  cb: (field: string, value: number) => void
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
        errorText={'Please enter your age to continue!'}
      />
    </>
  )
}

export default AgeStep
