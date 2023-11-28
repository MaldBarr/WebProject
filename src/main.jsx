import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import AboutUs from './pages/aboutUs';
import Cuenta from './pages/Cuenta';
import Login from './pages/login';
import Pizarra from './pages/Pizarra';
import Proyectos from './pages/Proyectos';
import Registro from './pages/Registro';
import Soporte from './pages/Soporte';
import Inicio from './pages/inicio';
import GestionUsuarios from './componentes/GestionUsuarios';

import App from './App';
import CuentaAdmin from './pages/CuentaAdmin';
import '../css/transicionesPaginas.css';

function Main() {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >
                <Routes location={location}>
                    <Route path="/" element={<App />} />
                    <Route path="/inicioPagina" element={<Inicio />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/pizarra" element={<Pizarra />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/cuenta" element={<Cuenta />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/soporte" element={<Soporte />} />
                    <Route path="/gestionUsuarios" element={<GestionUsuarios/>} />
                    <Route path="/cuentaAdmin" element={<CuentaAdmin/>} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Main />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
