import React, { useState } from 'react'
import { ProductIds } from '../types'
import { PRODUCT_IDS_TO_NAMES } from '../consts'
import { AgeStep, EmailStep, NameStep, SummaryStep } from '../components'

interface BuyflowProps {
  productId: ProductIds
  flow: Array<'email' | 'age' | 'name'>
  initialState: Record<string, string | number>
}

const FlowBuilder: React.FC<BuyflowProps> = (props) => {
  const componentMap = {
    email: EmailStep,
    age: AgeStep,
    name: NameStep,
  }
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState(props.initialState)

  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }

  const handleNextFlow = (index: number) => {
    if (index === props.flow.length - 1) {
      return 'summary'
    }
    return props.flow[index + 1]
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {props.flow.map((flow, index) => {
        const Component = componentMap[flow]
        return (
          currentStep === flow && (
            <Component cb={getStepCallback(handleNextFlow(index))} key={flow} />
          )
        )
      })}
      {currentStep === 'summary' && (
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}

export default FlowBuilder
