import React from 'react'
import { ProductIds } from '../types'
import FlowBuilder from './FlowBuilder'

interface BuyflowProps {
  productId: ProductIds
}

const Designerflow: React.FC<BuyflowProps> = (props) => {
  return (
    <>
      <FlowBuilder
        initialState={{
          email: '',
          age: 0,
          name: '',
        }}
        flow={['email', 'age', 'name']}
        productId={props.productId}
      />
    </>
  )
}

export default Designerflow
