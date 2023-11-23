import Header from "./Header";
import Footer from './Footer';
import styles from '/css/soporte.module.css';

function Soporte() {
    return (
      <>
        <Header />
        <div className={styles.soporte}>
          <div className={styles.textoSoporte}>
            <h2 className={styles.titulo}>¿Cómo podemos ayudarte?</h2>
            
            <h3> ¿Cómo funciona Binary Tree?</h3>
            <article className={styles.respuesta}>
                  r1rem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam iste culpa sit in quos molestiae itaque, harum eligendi id, beatae nemo excepturi, delectus quam minus quae deleniti neque est iusto.
            </article>

            <h3>¿Cómo gestiono mi cuenta?</h3>
            <span className={styles.respuesta}>
                  r2 dolor, sit amet consectetur adipisicing elit. Quidem voluptates unde aut iste provident eos, illum ut esse deserunt illo dolor in? Magnam officiis, incidunt quia ut autem est aperiam!
            </span>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
export default Soporte;