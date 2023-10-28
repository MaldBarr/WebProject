import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import reactLogo from './assets/react.svg'
import Logo from '/Logo.png'

import './App.css'


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
        <Link to={"/inicioPagina"}>
          <button onClick={toggleIndex}>Cargar Pagina</button> 
        </Link>

        {/* {showIndex && <Index />} */}

      </div>
    </>
  )
}

export default App
