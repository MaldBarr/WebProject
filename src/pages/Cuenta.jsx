import style from '/css/Cuenta.module.css';
import Header from './Header';

function Cuenta() {
    return (
        <>
        <Header/>
        <div className={style.configuracionCuenta}>
            <div className={style.userName}>
                <h3>Hola</h3>
                <h2>Usuario</h2>
            </div>
            <nav>
                <button className={style.button}>Informacion general</button> <br />
                <button className={style.button}>Configurar Cuenta</button><br />
                <button className={style.button}>Cerrar Sesion</button>
            </nav>
        </div>
        </>
    );
}
export default Cuenta;