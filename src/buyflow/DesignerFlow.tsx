import React, { useState } from 'react'
import { ProductIds } from '../types'
import { PRODUCT_IDS_TO_NAMES } from '../consts'
import { AgeStep, EmailStep, SummaryStep, NameStep } from '../components'

interface BuyflowProps {
  productId: ProductIds
}

const Designerflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    name: '',
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && <AgeStep cb={getStepCallback('name')} />) ||
        (currentStep === 'name' && (
          <NameStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Designerflow
