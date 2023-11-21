import { useState } from 'react';
import style from '/css/sidebarPizarra.css';

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
            <ul className={style.listaEstructurasDatos}>
                <li className={style.Estructura} >insertar logos de modelos</li>
            </ul>
        </div>
    );
}

export default SidebarPizarra;

