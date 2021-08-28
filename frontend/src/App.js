import React, { useEffect, useState } from 'react'
import logo from './prototype_fund.jpeg'
import './App.css'

function App () {
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
