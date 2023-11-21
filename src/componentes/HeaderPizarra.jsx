import {Link} from 'react-router-dom';
import styles from '/css/HeaderPizarra.module.css'


function HeaderPizarra() {
    return (
        <>
            <header className={styles.HeaderPizarra}>
                    <Link to={'/InicioPagina'}>
                        <img className={styles.logo} src="public/Logo.png" alt="Logo Binary Tree"/>
                    </Link>
                    <div className={styles.container}>
                        <h3> Nombre proyecto </h3>
                        <nav className={styles.opciones}>
                            <ul>
                                <li>
                                    <button> Opciones </button>
                                </li>
                                <li>
                                    <button> Soporte </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </header>
        </>
    );
}
export default HeaderPizarra;
