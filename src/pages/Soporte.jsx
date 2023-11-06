import React from "react";
import Header from "./Header";
import Footer from './Footer';
import styles from '/css/soporte.module.css';
function Soporte() {
    return(
        <>
        <Header/>
        <div className={styles.soporte}>
            <h2 className={styles.titulo}>¿Como podemos ayudarte?</h2>
            <br />
            <ul className={styles.listaPreguntasFrecuentes}>
                <li className={styles.pregunta}> <b>¿Como funciona Binary Tree? </b></li>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam iste culpa sit in quos molestiae itaque, harum eligendi id, beatae nemo excepturi, delectus quam minus quae deleniti neque est iusto.</p>
                <li className={styles.pregunta}> <b>¿Como gestiono mi cuenta? </b></li>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptates unde aut iste provident eos, illum ut esse deserunt illo dolor in? Magnam officiis, incidunt quia ut autem est aperiam! </p>
            </ul>

            <button className={styles.btnEnviarReporte}><b>Enviar Reporte</b></button>
        </div>
        <Footer/>
        </>
    );
};
export default Soporte;