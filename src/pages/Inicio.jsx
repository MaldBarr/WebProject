import {Link} from 'react-router-dom';
import Header from './Header';
import style from '/css/Inicio.module.css';
import Footer from './Footer';

function Inicio() {
    return (
        <>
        <Header/>

          <main className={style.contenido}>
              <section className={style.seccionCrearDiagrama}>
                <div className={style.seccionTexto}>
                    <h1 className={style.titulo}>
                      <span>Creador y visualizador </span> <br />
                      <span>de estructura de datos</span> <br />
                    </h1>
                    <p className={style.descripcion}>
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magni laborum veniam magnam cupiditate molestiae voluptatibus enim! Incidunt voluptatem tempora explicabo veritatis, et unde vitae beatae est commodi vel odio.</span> <br /> <br />
                    </p>
                    <Link to={'/Pizarra'}><button className={style.btnCrearDiagrama}>Crear diagrama</button></Link>
                </div>
                <img className={style.imgMuestra} src="./public/Logo.png" alt="Imagen de diagrama"></img>
              </section>
              
              <section id="showDiagram">
                <div className="texto">
                  <span>Como hacer un diagrama</span> <br />
                  <span>estructura de datos</span> <br />
                  <span>descripcion</span> <br />
                </div>
              </section>
          </main>
        <Footer/>
        </>
      );
}

export default Inicio;