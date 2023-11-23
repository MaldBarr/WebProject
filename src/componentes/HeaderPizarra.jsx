import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '/css/HeaderPizarra.module.css'

function HeaderPizarra(props) {
    return (
        <>
            <header className={styles.HeaderPizarra}>
                <div className={styles.leftContainer}>
                    <Link to={'/InicioPagina'}>
                        <img className={styles.logo} src="public/Logo.png" alt="Logo Binary Tree"/>
                    </Link>
                    <div className={styles.container}>
                        <h3> {props.nombreProyecto} </h3>
                        <nav className={styles.opciones}>
                            <ul>
                                <li>
                                    <p> Archivo </p>
                                </li>
                                <li>
                                    <p> Ayuda </p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Link to = '/Cuenta' className={styles.imgCuenta}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" alt ="Icono cuenta">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </Link>
            </header>
        </>
    );
}

HeaderPizarra.propTypes = {
    nombreProyecto: PropTypes.string.isRequired
};

export default HeaderPizarra;
