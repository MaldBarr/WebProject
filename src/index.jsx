import React from "react";

const index = () => {
    return (
        <>
        <div>
          <header>
            <img src="images/Logo.png" />
            <ul>
              <li><a href="aboutUs.html">Sobre<br />Nosotros</a></li>
              <li><a id="userCharacter" href="login.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </a></li>
            </ul>
          </header>
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
          </main>
        </div>
        </>
      );
};

export default index;