import React, { useEffect, useState } from 'react'

interface NameStepProps {
  cb: (field: string, value: string) => void
  label: string
  value: string
  placeholder?: string
  type: 'text' | 'email' | 'number'
  isRequired: boolean
  name: string
  errorText: string
  pattern?: string
}

export const StepInput: React.FC<NameStepProps> = (props) => {
  const [data, setData] = useState('')
  const [error, showError] = useState(false)

  useEffect(() => {
    setData(props.value)
  }, [props.value])

  return (
    <>
      <div className="input-grp">
        {props.label}:{' '}
        <input
          placeholder={props.placeholder}
          type={props.type}
          onChange={({ target: { value } }) => {
            setData(value)
            value && error && showError(false)
          }}
          value={data}
          required={props.isRequired}
        />
        {error && <span>{props.errorText}</span>}
      </div>
      <button
        type="submit"
        onClick={() => {
          if (
            props.isRequired &&
            !(props.pattern && new RegExp(props.pattern).test(data))
          ) {
            showError(true)
            return
          }
          props.cb(props.name, data)
        }}
      >
        Next
      </button>
    </>
  )
}

export default StepInput
