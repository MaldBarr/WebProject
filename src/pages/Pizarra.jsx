import React from "react";
import Header from './Header';
function Pizarra(){
    return (
        <>
        <div>
        <Header/>
        <main>
            <div id="sidebar" className="active">
            <div className="toggle-btn">
                <span>☰</span>
            </div>
            <ul>
                <li>insertar logos de modelos</li>
            </ul>
            </div>
        </main>
        </div>
        </>
    );
};
export default Pizarra;