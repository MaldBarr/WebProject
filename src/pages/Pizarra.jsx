import Header from './Header';
import Footer from './Footer';
import style from '/css/Pizarra.css'
import {Link} from 'react-router-dom';

function Pizarra(){
    return (
        <>
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
        </>
    );
};
export default Pizarra;