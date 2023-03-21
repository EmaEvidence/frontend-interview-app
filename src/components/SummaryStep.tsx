import React from 'react'
import { Link } from 'react-router-dom'
import { ProductIds } from '../types'

interface SummaryStepProps {
  collectedData: Record<string, string | number>
  productId: ProductIds
}

export const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      {Object.entries(props.collectedData).map((entry) => (
        <div key={entry[0]} className="summary-item">
          {entry[0]}: {entry[1]}
        </div>
      ))}
      <div>
        <Link to={`/purchased=${props.productId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
