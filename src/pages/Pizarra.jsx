import styles from '/css/Pizarra.css';
import HeaderPizarra from '../componentes/HeaderPizarra';
import PizarraYSidebar from '../componentes/PizarraYSidebar';

function Pizarra() {
    return (
        <>
        <HeaderPizarra nombreProyecto='Proyecto 1'/>
        {/* 
        <SidebarPizarra />
        <PizarraManipular className={styles.PizarraManipular} />*/}
        <PizarraYSidebar/>
        </>
    );
}

export default Pizarra;
