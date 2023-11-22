import styles from '/css/Pizarra.css';
import HeaderPizarra from '../componentes/HeaderPizarra';
import SidebarPizarra from '../componentes/SidebarPizarra';
import PizarraManipular from '../componentes/PizarraManipular';

function Pizarra() {
    return (
        <>
        <HeaderPizarra/>
        <SidebarPizarra/>
        <PizarraManipular className={styles.PizarraManipular} />
        </>
    );
}

export default Pizarra;
