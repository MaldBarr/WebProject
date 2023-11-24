import { useState } from 'react';
import  '/css/sidebarCuenta.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
Quiero que se pase por parametro props

y que se pase : Nombre y  un arreglo de objetos donde cada objeto contenga: nombreCategoria(string),ruta(string),predeterminado(bool)
si predeterminado es true =>  solo queda asi <li className="opcionPredeterminada">
                        <p><b> aqui el nombre categoria </b></p>
                    </li>

*/
function SidebarCuenta(props) {
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
            <h3> <b> {props.nombre} </b> </h3>
            <nav>
                <ul >
                    {props.categorias.map((categoria, index) => (
                        categoria.predeterminado ?
                        <li key={index} className="opcionPredeterminada">
                            <p><b>{categoria.nombreCategoria}</b></p>
                        </li>
                        :
                        <li key={index}>
                            <Link to={categoria.ruta}>
                                <p>{categoria.nombreCategoria}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>           
        </div>
    );
}
SidebarCuenta.propTypes = {
    nombre: PropTypes.string.isRequired,
    categorias: PropTypes.arrayOf(
        PropTypes.shape({
            nombreCategoria: PropTypes.string.isRequired,
            ruta: PropTypes.string.isRequired,
            predeterminado: PropTypes.bool.isRequired
        })
    ).isRequired
};
export default SidebarCuenta;
