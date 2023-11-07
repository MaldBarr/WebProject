import Header from './Header';
import Footer from './Footer';
import styles from '/css/aboutUs.module.css';

function AboutUs() {
    return (
      <>
      <Header/>
        <div className={styles.contenido}>
          <div className={styles.texto}>
            <h2 className={styles.titulo}> <b> ¿ Quienes somos ? </b></h2>
            <span> Somos un equipo de estudiantes de la carrera de Ingeniería en Ejecución Informática, actualmente inmersos en el mundo de la Ingeniería Web. Nuestra unidad y entusiasmo por este campo de estudio nos han llevado a embarcarnos en un proyecto único y desafiante: Binary Tree.</span>
            <h2 className={styles.titulo}> <b>  La mision de Binary Tree </b></h2>
            <span> En Binary Tree, nuestra misión es llevar la complejidad de las estructuras de datos a un nivel accesible para todos. A través de Binary Tree, buscamos demostrar cómo una estructura aparentemente abstracta como un árbol binario puede ser visualizada y comprendida de manera intuitiva a través de la web.</span>
          </div>
        </div>
      <Footer/>
      </>
    );
}

export default AboutUs;