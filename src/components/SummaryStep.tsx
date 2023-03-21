import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: Record<string, string | number>
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
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
