import {Link} from 'react-router-dom';
import {React,useState} from 'react';
import style from '/css/Header.css'

function Header() {
    return (
        <>
        <header className = {style.Header}>
            <Link to={'/InicioPagina'}><img className={style.img} src="public/Logo.png" /></Link>
            <ul className={style.ul}>
              <Link to={"/aboutus"}>
                <li className={style.li}>Sobre<br />Nosotros</li>
              </Link>
              <li>
                <Link  to={"/login"}> 
                <a id="userCharacter" href="login.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </a>
                </Link>
                </li>
            </ul>
        </header>
        </>
    );
};
export default Header;
