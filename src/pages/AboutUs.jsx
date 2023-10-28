import React from "react";

function AboutUs() {
    return (
      <>
    <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>aboutUs</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="stylesheet" href="css/aboutUsStyle.css" />
        <main>
          <div>
            <span>Somos tres estudiantes de la carrera: "ingenieria en ejecucion informatica", que actualmente</span><br />
            <span>nos encontramos curzando el ramo de "ingenieria web", donde como proyecto a presentar, nacio:</span><br />
            <span>BINARY TREE</span>
          </div>
        </main>
        <footer>
          <a href="soporte.html">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
        </footer>
      </div>
      </>
    );
}

export default AboutUs;