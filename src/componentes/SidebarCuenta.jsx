import { useState } from 'react';
import  '/css/sidebarCuenta.css';
import { Link } from 'react-router-dom';

function SidebarCuenta() {
    const [isActive, setIsActive] = useState(true);
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
    return (
        <div id="sidebarCuenta" className={isActive ? "active" : ""} >
            <div className="toggle-btn" onClick={toggleSidebar}>
                <span>☰</span>
            </div>
            <img className="imgEstructura" src="public/Logo.png" alt="Logo Binary Tree"/>
            <h3> <b> Nombre persona </b> </h3>
            <nav>
                <ul >
                    <li className="opcionPredeterminada">
                        <p><b>Configurar Cuenta</b></p>
                    </li>
                    <li>
                        <Link to = '/inicioPagina'>
                            <p>Cerrar Sesión</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}

export default SidebarCuenta;