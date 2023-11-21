import {Link} from 'react-router-dom';
import styles from '/css/SidebarProyectos.css'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';

function SidebarProyectos() {
    const [isActive, setIsActive] = useState(true);
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <>
        <div  id ="sidebarProyectos" className={isActive ? "active" : ""} >

            <nav className="links">
                <ul className="listaRedirecciones">
                    <Link to={"/cuenta"}>
                        <li> 
                            <b>Mi cuenta </b>
                        </li>
                    </Link>
                    <Link to={"/soporte"}>
                            <li>
                                <b>Soporte</b>
                            </li>
                    </Link> 
                </ul>
            </nav>
            <div className="toggle-btn" onClick={toggleSidebar}>
                <span> <FiAlignJustify size='20px'/> </span>
            </div>
        </div>
        </>
    );
}
export default SidebarProyectos;
