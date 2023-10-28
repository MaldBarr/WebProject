import React from "react";

function Soporte() {
    return(
        <>
        <div>
        <header>
            <a href="index.html">
            <img src="images/Logo.png" />
            </a>
            <ul>
            <li>
                <a href="aboutUs.html">
                Sobre
                <br />
                Nosotros
                </a>
            </li>
            <li>
                <a href="login.html">
                Iniciar
                <br />
                Sesión
                </a>
            </li>
            </ul>
        </header>
        <main>
            <h2>¿Como podemos ayudarte?</h2>
            <br />
            <button id="report">Enviar Reporte</button>
        </main>
        <footer>derechos reservados</footer>
        </div>
        </>
    );
};
export default Soporte;