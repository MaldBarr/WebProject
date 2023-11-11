import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";


import AboutUs from './pages/aboutUs';
import Cuenta from './pages/Cuenta';
import Login from './pages/login';
import Pizarra from './pages/Pizarra';
import Proyectos from './pages/Proyectos';
import Registro from './pages/Registro';
import Soporte from './pages/Soporte';

import Inicio from './pages/inicio';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* CUANDO SE CREE UN ARCHIVO EN CARPETA PAGES QUE EMPIECE CON UNA MAYUSCULA*/}

    <BrowserRouter>
          {/*Aca poner todas las rutas existentes (Funciona como un if) */}
          <Routes>
                  {/* Path = "/" se carga siempre que se abre el host por defecto. */}
                  <Route path="/" element={<App />} />

                  <Route path="/inicioPagina" element={<Inicio />} />
                  <Route path="/proyectos" element={<Proyectos />} />
                  <Route path="/pizarra" element={<Pizarra />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/cuenta" element={<Cuenta />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registro" element={<Registro />} />
                  <Route path="/soporte" element={<Soporte />} />

        	</Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
