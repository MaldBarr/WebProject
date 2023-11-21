import style from '/css/Pizarra.css';
import HeaderPizarra from '../componentes/HeaderPizarra';
import SidebarPizarra from '../componentes/SidebarPizarra';
import PizarraManipular from '../componentes/PizarraManipular';

function Pizarra() {
    return (
        <>
        <HeaderPizarra/>
        <SidebarPizarra/>
        <PizarraManipular/>
        </>
    );
};

export default Pizarra;
