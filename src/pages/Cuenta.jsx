import style from '/css/Cuenta.module.css';

function Cuenta() {
    return (
        <>
        <div className={style.configuracionCuenta}>
            <div id="UserName">
            <h3>Hola</h3>
            <h2>Usuario</h2>
            </div>
                <div>
                    <button className={style.button}>Datos Personales</button> <br />
                    <button className={style.button}>Configurar Cuenta</button><br />
                    <button className={style.button}>Cerrar Sesion</button>
                </div>
            </div>
        </>
    );
}
export default Cuenta;