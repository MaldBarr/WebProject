import React from "react";
import {Link} from 'react-router-dom';
import styles from '/css/login.css'


function Login(){
    return (
        <>
        <div className={styles.body}>
        
        <section id="Login" className={styles.Login}>
            <form className={styles.form}>
                <h2>Identificate</h2>
                <p>Usa tu email y contraseña para Identificarte</p>
                
                <input type="email" placeholder="Email" id="email" required="" className={styles.input}/>
                
                <p id={1} />
                
                <input
                    type="password"
                    placeholder="Contraseña"
                    id="password"
                    required=""
                    className={styles.input}    
                />
                
                <p id={2} />
                <button type="submit" className={styles.button}>Iniciar sesión</button>
            </form>
        </section>
        
        <section className={styles.section}>
            <div>
                <h2>Iniciar sesión</h2>
                <p>o</p>
                <div>
                    <Link to={'/Registro'}><button className={styles.button}>Crear cuenta</button></Link>
                    <Link to={'/InicioPagina'}><button className={styles.button}>Inicio</button></Link>
                </div>
            </div>
        </section>
        </div>
        </>
    );
};
export default Login;