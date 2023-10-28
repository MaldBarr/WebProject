import React from "react";
import Header from './Header';
import Footer from './Footer';
import style from '/css/Pizarra.css'

function Pizarra(){
    return (
        <>
        <Header/>
        <div>
        <main>
            <div id="sidebar" className="active,{style.sidebar}" >
            <div className="toggle-btn">
                <span>☰</span>
            </div>
            <ul className={style.ul}>
                <li className={style.li} >insertar logos de modelos</li>
            </ul>
            </div>
        </main>
        </div>
        <Footer/>
        </>
    );
};
export default Pizarra;