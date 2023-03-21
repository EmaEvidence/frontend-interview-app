import React from 'react'
import { Link } from 'react-router-dom'
import { insuranceProducts } from '../consts'

export const FlowsHome = () => {
  return (
    <div>
      <p>Welcome to Getsafe Insurance</p>
      {insuranceProducts.map(({ name, link }) => (
        <Link to={link} key={name}>
          <h4>{name} - Get started!</h4>
        </Link>
      ))}
    </div>
  )
}

export default FlowsHome
