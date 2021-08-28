import React, { useEffect, useState } from 'react'
import logo from './prototype_fund.jpeg'
import './App.css'
import Approval from './components/Approval'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App () {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/approval">Approval</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/approval">
            <Approval/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home () {
  const [message, setMessage] = useState()
  useEffect(() => {
    fetch('/api/')
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error)
  }, [setMessage])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          businessresponsibility.ch!! 🍕🍕🍕
        </p>
        <p>{message || 'Loading...'}</p>
      </header>
    </div>
  )
}

export default App
