import {React,useState} from 'react';
import {Link} from 'react-router-dom';
import Login from './login';

function Inicio() {
    return (
        <>
        <Login />
        <div>
          <main>
            <div id="createDiagram">
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
        </>
      );
};

export default Inicio;