import Header from './Header';
import SidebarCuenta from '../componentes/SidebarCuenta';
import GestionUsuarios from '../componentes/GestionUsuarios';

function CuentaAdmin() {
    return (
        <>
        <Header/>
        <SidebarCuenta nombre='Admin' categorias={[
        {nombreCategoria: 'Administración', ruta: '/configurar-cuenta', predeterminado: true},
        {nombreCategoria: 'Cerrar Sesión', ruta: '/InicioPagina', predeterminado: false}
        ]}/>
        <GestionUsuarios/>
        </>

    );
}
export default CuentaAdmin;