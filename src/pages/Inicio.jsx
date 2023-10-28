import {React,useState} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import style from '/css/Inicio.css';
import Footer from './Footer';

function Inicio() {
    return (
        <>
        <Header/>
        <body className={style.body}>
          <div className={style.div}>
            <main>
              <div id="createDiagram" className={style.createDiagram}>
                <div className="texto">
                  <span>Creador y visualizador </span> <br />
                  <span>de estructura de datos</span> <br />
                  <span>descripcion</span> <br /> <br />
                  <button>Crear diagrama</button>
                </div>
              </div>
              <div id="showDiagram">
                <div className="texto">
                  <span>Como hacer un diagrama</span> <br />
                  <span>estructura de datos</span> <br />
                  <span>descripcion</span> <br />
                </div>
              </div>
              <Link to={"/proyectosRuta"}>
              <li>proyectos</li>
              </Link>
            </main>
          </div>
        </body>
        <Footer/>
        </>
      );
};

export default Inicio;