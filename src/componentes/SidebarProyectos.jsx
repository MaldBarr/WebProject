import {Link} from 'react-router-dom';
import styles from '/css/SidebarProyectos.module.css'

function SidebarProyectos() {
    return (
        <>
            <aside className={styles.sidebar}>
                <nav className={styles.links}>
                    <ul className={styles.listaLinks}>
                        <li> 
                            <Link to={"/aboutus"}>
                            <b>Configuracion cuenta </b>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/aboutus"}>
                            <b>Sobre nosotros</b>
                            </Link> 
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
export default SidebarProyectos;
