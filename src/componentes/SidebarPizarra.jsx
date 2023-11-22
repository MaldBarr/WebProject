import { useState } from 'react';

function SidebarPizarra() {
    const [isActive, setIsActive] = useState(true);
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
    return (
        <div id="sidebar" className={isActive ? "active" : ""} >
            <div className="toggle-btn" onClick={toggleSidebar}>
                <span>☰</span>
            </div>
            <ul className="listaEstructurasDatos">
                <li className="Estructura" >
                    <img className="imgEstructura" src="public/Logo.png" alt="Logo Binary Tree"/>
                </li>
                <li className="Estructura" >
                    <img className="imgEstructura" src="public/Logo.png" alt="Logo Binary Tree"/>
                </li>
                <li className="Estructura" >
                    <img className="imgEstructura" src="public/Logo.png" alt="Logo Binary Tree"/>
                </li>
            </ul>
        </div>
    );
}

export default SidebarPizarra;

