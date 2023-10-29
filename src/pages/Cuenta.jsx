import React from "react";
import style from '/css/Cuenta.css?inline';

function Cuenta() {
    return (
        <>
        <div>
        <main>
            <div id="UserName">
            <h3>Hola</h3>
            <h2>Usuario</h2>
            </div>
            <div>
            <button className={style.button}>DatosPersonales</button> <br />
            <button className={style.button}>ConfigurarCuenta</button><br />
            <button className={style.button}>Cerrar Sesion</button>
            </div>
        </main>
        </div>
        </>
    );
};
export default Cuenta;