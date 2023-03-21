import React from 'react'
import StepInput from './StepInput'

interface NameStepProps {
  cb: (field: string, value: string) => void
}

export const NameStep: React.FC<NameStepProps> = (props) => {
  return (
    <>
      <StepInput
        placeholder="Firstname Lastname"
        label="Name"
        cb={(field: string, value: string) => {
          props.cb(field, value)
        }}
        value=""
        type="text"
        isRequired={true}
        name={'name'}
        pattern="^[a-zA-Z]+ [a-zA-Z]+$"
        errorText={'Please enter your Firstname and Lastname to continue!'}
      />
    </>
  )
}

export default NameStep
