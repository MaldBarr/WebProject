import React from "react";

function Proyectos() {
    return (<>
    <div>
    <main>
        <div id="sidebar" className="active">
        <div className="toggle-btn">
            <span>☰</span>
        </div>
        <ul>
            <li>Modo oscuro</li>
            <li>
            <a href="cuenta.html">Configuracion cuenta</a>
            </li>
            <li>
            <a href="aboutUs.html">Sobre nosotros</a>
            </li>
        </ul>
        </div>
    </main>
    <Footer/>
    </div>
    </>
    );
};
export default Proyectos
