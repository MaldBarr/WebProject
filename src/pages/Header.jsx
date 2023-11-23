import {Link} from 'react-router-dom';
import { useState } from 'react';
import styles from '/css/Header.module.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <header className = {styles.BTHeader}>
            <Link to={'/InicioPagina'}><img className={styles.logo} src="public/Logo.png" alt="Logo Binary Tree"/></Link>
            <nav>
              <ul className={styles.listaRedirecciones}>
                <li className={`${styles.redireccion1} ${isMenuOpen ? styles.open : ''}`}> {/**/}
                  <Link to={"/aboutus"}>
                    Sobre <br/> Nosotros
                  </Link>
                </li>
                <li className={`${styles.redireccion2} ${isMenuOpen ? styles.open : ''}`}>
                  <Link  to={"/login"}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" alt ="Icono cuenta">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                  </Link>
                </li>
              </ul>
              <button onClick={toggleMenu} className={styles.menuButton}>☰</button>
            </nav>
        </header>
        </>
    );
}
export default Header;
