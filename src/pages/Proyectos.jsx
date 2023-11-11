import Header from './Header';
import SidebarProyectos from "../componentes/SidebarProyectos";
import styles from '/css/Proyectos.module.css';

function Proyectos() {
    return (<>
    <Header/>
    <section className={styles.proyectos}>
        <SidebarProyectos/>
        <section className={styles.seccionProyectos}>
            <div className={styles.seccionCrearProyecto}>
                <b> Crear Proyecto </b>
            </div>
            <div className={styles.seccionMisProyectos}>
                <b> Abrir Proyecto </b>
            </div>
        </section>
    </section>
    </>
    );
}
export default Proyectos
