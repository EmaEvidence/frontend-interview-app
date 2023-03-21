import React, { useState } from 'react'

interface NameStepProps {
  cb: (field: string, value: string) => void
}

export const NameStep: React.FC<NameStepProps> = (props) => {
  const [name, setName] = useState('')
  return (
    <>
      <div>
        Name:{' '}
        <input
            placeholder='Firstname Lastname'
          type="text"
          onChange={({ target: { value } }) => {
            setName(value)
          }}
          value={name}
        ></input>
      </div>
      <button onClick={() => props.cb('name', name)}>Next</button>
    </>
  )
}

export default NameStep
