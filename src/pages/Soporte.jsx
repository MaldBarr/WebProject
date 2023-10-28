import React from "react";
import Header from "./Header";
import Footer from './Footer';
function Soporte() {
    return(
        <>
        <div>
        <Header/>
        <main>
            <h2>¿Como podemos ayudarte?</h2>
            <br />
            <button id="report">Enviar Reporte</button>
        </main>
        <Footer/>
        </div>
        </>
    );
};
export default Soporte;