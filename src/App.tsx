import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Devflow from './buyflow/DevFlow'
import Designerflow from './buyflow/DesignerFlow'
import { ProductIds } from './types'
import { FlowsHome } from './components'

const App = () => {
  const routes = [
    {
      path: '/buy/insurance_dev',
      render: () => <Devflow productId={ProductIds.devIns} />,
    },
    {
      path: '/buy/insurance_designer',
      render: () => <Designerflow productId={ProductIds.designIns} />,
    },
    {
      path: '/*',
      render: () => <FlowsHome />,
    },
  ]
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          {routes.map(({ path, render }, index) => (
            <Route exact path={path} key={`${path}${index}`}>
              {render()}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default App
