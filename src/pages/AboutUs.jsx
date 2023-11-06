import Header from './Header';
import Footer from './Footer';
import styles from '/css/aboutUs.module.css';

function AboutUs() {
    return (
      <>
      <Header/>
        <div className={styles.contenido}>
          <span>Somos tres estudiantes de la carrera: ingenieria en ejecucion informatica, que actualmente</span><br />
           <span>nos encontramos cursando el ramo de ingenieria web, donde como proyecto a presentar, nacio:</span><br />
          <span>BINARY TREE</span>
        </div>
      <Footer/>
      </>
    );
}

export default AboutUs;