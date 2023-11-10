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
                <article className={style.seccionTexto}>
                    <h1 className={style.titulo}>
                      <span>Creador y visualizador </span> <br />
                      <span>de estructura de datos</span> <br />
                    </h1>
                    <p className={style.descripcion}>
                      <span>Binary Tree es una plataforma web innovadora diseñada para simplificar la creación y visualización de estructuras de datos a través de diagramas intuitivos. Con Binary Tree, puedes dar vida a tus ideas, procesos y sistemas mediante la representación gráfica de datos de manera rápida y sencilla.</span> <br /> <br />
                    </p>
                    <Link to={'/Pizarra'}><button className={style.btnCrearDiagrama}><b>Crear diagrama</b></button></Link>
                </article>
                <img className={style.imgMuestra} src="./public/Logo.png" alt="Imagen de diagrama"></img>
              </section>
              
              <section className={style.seccionInformacion}>
                <img className={style.imgMuestra2} src="./public/Logo.png" alt="Imagen de diagrama"></img>
                <article className={style.seccionTexto2}>
                  <h2 className={style.tituloInformacion}>
                    <span>¿Como hacer un diagrama</span> <br />
                    <span>de estructura de datos?</span> <br />
                  </h2>
                  <p className={style.descripcion}><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatum voluptates. Qui nihil quidem unde a nobis soluta autem sed nesciunt voluptatibus laboriosam. Reiciendis nostrum iure, maxime laudantium hic labore.</span> <br /></p>
                </article>
              </section>
        </main>
        <Footer/>
        </>
      );
}

export default Inicio;