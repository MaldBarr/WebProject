import Header from "./Header";
import Footer from './Footer';
import styles from '/css/soporte.module.css';

function Soporte() {
  /*
  function togglePregunta(event) {
        const pregunta = event.target.closest('li').querySelector('p');
        if (pregunta) {
          if (!pregunta.classList.contains('preguntaAbiertaSoporte')) {
            pregunta.classList.replace('respuesta', 'preguntaAbiertaSoporte');
          } else {
            pregunta.classList.replace('preguntaAbiertaSoporte', 'respuesta');
          }
        }
      }
    */  
    return (
      <>
        <Header />
        <div className={styles.soporte}>
          <h2 className={styles.titulo}>¿Cómo podemos ayudarte?</h2>
          <br />
          <ul className={styles.listaPreguntasFrecuentes}>
            {/*<li className={styles.pregunta} onClick={togglePregunta}>*/}
            <li className={styles.pregunta} >
              <b> ¿Cómo funciona Binary Tree?</b>
              <p className={styles.respuesta}>
                r1rem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam iste culpa sit in quos molestiae itaque, harum eligendi id, beatae nemo excepturi, delectus quam minus quae deleniti neque est iusto.
              </p>
            </li>
            <li className={styles.pregunta} >
              <b>¿Cómo gestiono mi cuenta?</b>
              <p className={styles.respuesta}>
                r2 dolor, sit amet consectetur adipisicing elit. Quidem voluptates unde aut iste provident eos, illum ut esse deserunt illo dolor in? Magnam officiis, incidunt quia ut autem est aperiam!
              </p>
            </li>
          </ul>
        </div>
        <Footer />
      </>
    );
  }
  
export default Soporte;