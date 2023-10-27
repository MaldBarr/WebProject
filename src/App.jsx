import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import Logo from '/Logo.png'
import './App.css'
import Index from './index'

function App() {
  const [showIndex, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex(!showIndex);
  }
  return (
    <>
      <div>
        <img src={Logo} className="logo"/>
        <img src={reactLogo} className="logo react" alt="React logo"/>
      </div>
      <h1>BinaryTREE + React</h1>
      <div className="card">
        <button onClick={toggleIndex}>Cargar Pagina</button>
        {showIndex && <Index />}
      </div>
    </>
  )
}

export default App
