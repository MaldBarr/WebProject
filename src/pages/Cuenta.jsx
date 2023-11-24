import style from '/css/Cuenta.module.css';
import Header from './Header';
import SidebarCuenta from '../componentes/SidebarCuenta';
import InformacionCuenta from '../componentes/InformacionCuenta';

function Cuenta() {
    return (
        <>
        <Header/>
        <SidebarCuenta nombre='Pepito' categorias={[
        {nombreCategoria: 'Configurar Cuenta', ruta: '/configurar-cuenta', predeterminado: true},
        {nombreCategoria: 'Cerrar Sesión', ruta: '/InicioPagina', predeterminado: false}
        ]}/>        <InformacionCuenta nombre="nombre" rut="21312" email="email" region="region" comuna="comuna" contrasena="contraseña" className={style.configuracionCuenta} />
        </>
    );
}
export default Cuenta;