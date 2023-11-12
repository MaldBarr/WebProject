import Header from './Header';
import SidebarProyectos from "../componentes/SidebarProyectos";
import styles from '/css/Proyectos.module.css';
import CardProject from '../componentes/CardProject';

function Proyectos() {
    return (<>
    <Header/>
    <SidebarProyectos/>
    <section className={styles.proyectos}>
        <section className={styles.seccionProyectos}>
           <div className={styles.containerProyectos}>

           <h3><b> Crear Proyecto </b></h3>
            <div className={styles.seccionCrearProyecto}>
                    <CardProject title="Mi título de carta" imgPath="./public/add_circles.png"/> 
            </div>
            <h3><b> Abrir Proyecto </b> </h3>
            <div className={styles.seccionMisProyectos}>
            <CardProject title="Proyecto 1" imgPath="./public/add_circles.png"/> 
            <CardProject title="Proyecto 2" imgPath="./public/add_circles.png"/> 
            <CardProject title="Mi título de carta" imgPath="./public/add_circles.png"/> 
            <CardProject title="Mi título de carta" imgPath="./public/add_circles.png"/> 
            <CardProject title="Mi título de carta" imgPath="./public/add_circles.png"/> 
            <CardProject title="Mi título de carta" imgPath="./public/add_circles.png"/> 

            </div>
           </div>
        </section>
    </section>
    </>
    );
}
export default Proyectos
