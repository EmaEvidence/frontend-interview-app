import React from 'react'
import { ProductIds } from '../types'
import FlowBuilder from './FlowBuilder'

interface BuyflowProps {
  productId: ProductIds
}

const Devflow: React.FC<BuyflowProps> = (props) => {
  return (
    <>
      <FlowBuilder
        initialState={{
          email: '',
          age: 0,
        }}
        flow={['email', 'age']}
        productId={props.productId}
      />
    </>
  )
}

export default Devflow
