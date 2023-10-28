import React from "react";
import {Link} from 'react-router-dom';

function Login(){
    return (
        <>
        <div>
        <section id="Login">
            <form>
            <h2>Identificate</h2>
            <p>Usa tu email y contraseña para Identificarte</p>
            <input type="email" placeholder="Email" id="email" required="" />
            <p id={1} />
            <input
                type="password"
                placeholder="Contraseña"
                id="password"
                required=""
            />
            <p id={2} />
            <button type="submit">Iniciar sesión</button>
            </form>
        </section>
        <section>
            <div>
            <h2>Iniciar sesión</h2>
            <p>o</p>
            <div>
                <Link to={'/Registro'}>
                    <button>
                    Crear cuenta
                    </button>
                </Link>
                <Link to={'/InicioPagina'}><button>Inicio</button></Link>
            </div>
            </div>
        </section>
        </div>
        </>
    );
};
export default Login;