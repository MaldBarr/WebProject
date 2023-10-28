import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './index.css';
import Inicio from './pages/inicio';
import Proyectos from './Proyectos';
import Header from './pages/Header';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* CUANDO SE CREE UN ARCHIVO EN CARPETA PAGES QUE EMPIECE CON UNA MAYUSCULA*/}

    <BrowserRouter>
          {/* El header va a quedar para siempre en todas las paginas que se redireccione*/}
          <Header/>
          {/*Aca poner todas las rutas existentes (Funciona como un if) */}
          <Routes>
                  {/* Path = "/" se carga siempre que se abre el host por defecto. */}
                  <Route path="/" element={<App />} />

                  <Route path="/inicioPagina" element={<Inicio />} />
                  <Route path="/proyectosRuta" element={<Proyectos />} />

        	</Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
