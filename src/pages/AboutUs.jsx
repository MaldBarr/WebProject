import React from "react";
import Header from './Header';
import Footer from './Footer';

function AboutUs() {
    return (
      <>
      <Header/>
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
          <Footer/>
        </div>
      </>
    );
}

export default AboutUs;