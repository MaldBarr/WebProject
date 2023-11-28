import { useState } from 'react';
import styles from '/css/sidebarPizarra.module.css';

import EstructuraCategoriaCard from './EstructuraCategoriaCard';

function PizarraYSidebar() {
    /*Funciones para animaciones del sidebar */
    const [isActive, setIsActive] = useState(true);
    const [activeSections, setActiveSections] = useState({});
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
    const toggleSection = (section) => {
        setActiveSections({ ...activeSections, [section]: !activeSections[section] });
    };
    function handleDrop(event) {
        event.preventDefault();
        const imageName = event.dataTransfer.getData("text");
        // Crear una nueva imagen y añadirla al contenedor
        const img = document.createElement("img");
        img.src = `public/estructuras-de-datos/${imageName}.png`;
        img.style.position = 'absolute';
        // Restar la posición del contenedor de la posición del cursor
        const rect = event.target.getBoundingClientRect();
        img.onload = function () {
            img.style.left = (event.clientX - rect.left - img.width / 2) + 'px';
            img.style.top = (event.clientY - rect.top - img.height / 2) + 'px';
        }
        img.draggable = true;
        img.onmousedown = function (event) {
            event.preventDefault();
            img.style.zIndex = 1000;
            let shiftX = event.clientX - img.getBoundingClientRect().left;
            let shiftY = event.clientY - img.getBoundingClientRect().top;
            function moveAt(pageX, pageY) {
                img.style.left = pageX - shiftX + 'px';
                img.style.top = pageY - shiftY + 'px';
            }
            moveAt(event.pageX, event.pageY);
            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }
            document.addEventListener('mousemove', onMouseMove);
            document.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                document.onmouseup = null;
            }
        };
        // Crear un nuevo contenedor y añadir la imagen a él
        const wrapper = document.createElement('div');
        wrapper.appendChild(img);

        img.onmouseenter = function (event) {
            console.log("encima de imagen");
            img.style.cursor = 'pointer';
            // Crear los puntos de anclaje y añadirlos al contenedor
            const anchorPoints = ['top', 'right', 'bottom', 'left'];
            for (let i = 0; i < anchorPoints.length; i++) {
                const anchor = document.createElement("div");
                anchor.className = "anchor-point " + anchorPoints[i];
                anchor.style.border = '1px solid black';
                anchor.style.backgroundColor = 'white';
                wrapper.appendChild(anchor);

                anchor.onmousedown = function (event) {
                    // Aquí puedes iniciar la creación de la flecha
                };
            }
            // Añadir el contenedor al objetivo
            event.target.appendChild(wrapper);
        };


        event.target.appendChild(img);
    }


    return (
        <>
            {/*SIDEBAR*/}
            {/* Boton para esconder y mostrar el sidebar*/}
            <div id={styles.toggleBtn} onClick={toggleSidebar}
                className={isActive ? styles.active : ""}>
                <span>☰</span>
            </div>
            <div id={styles.sidebarPizarra} className={isActive ? styles.active : ""} >
                <h2> Estructuras de <br></br>datos </h2>
                <h3 onClick={() => toggleSection('Arreglos')}> Arreglos </h3>
                {activeSections.Arreglos && <EstructuraCategoriaCard images={[
                    { nameImg: "array", altImg: "Array", "cuadrado": false },
                    { nameImg: "matrix", altImg: "Matrix", "cuadrado": true }]} />}

                <h3 onClick={() => toggleSection('Listas')}> Listas </h3>
                {activeSections.Listas && <EstructuraCategoriaCard images={[{ nameImg: "linkedList", altImg: "LinkedList" },
                { nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node", "cuadrado": false },
                { nameImg: "DoubleLinkedlist", altImg: "Double linked list", "cuadrado": false },
                { nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node", "cuadrado": false },
                { nameImg: "circularLinkedList", altImg: "Circular linked list", "cuadrado": true },
                { nameImg: "circularLinkedListWithGhostNode", altImg: "Circular linked list with ghost node", "cuadrado": true },
                { nameImg: "circularDoubleLinkedList", altImg: "Circular Double linked list with ghost node", "cuadrado": true },
                { nameImg: "circularDoubleLinkedListWithGhostNode", altImg: "Circular Double linked list with ghost node", "cuadrado": true }
                ]} />}

                <h3 onClick={() => toggleSection('Arboles')}> Arboles </h3>
                {activeSections.Arboles && <EstructuraCategoriaCard images={[{ nameImg: "ABB", altImg: "Binary three", 'cuadrado': true }]} />}

                <h3 onClick={() => toggleSection('PilasColas')}> Pilas y colas </h3>
                {activeSections.PilasColas && <EstructuraCategoriaCard images={[{ nameImg: "linkedList", altImg: "LinkedList", "cuadrado": false },
                { nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node" },
                { nameImg: "DoubleLinkedlist", altImg: "Double linked list" },
                { nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node", "cuadrado": false }]} />}

                <h3 onClick={() => toggleSection('otros')}> Otros </h3>
                {activeSections.otros && <EstructuraCategoriaCard images={[{ nameImg: "node", altImg: "Nodo", "cuadrado": true }]} />}
            </div>
            {/*PIZARRA*/}
            <div id={styles.diagramContainer} onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>

            </div>
        </>
    );
}


export default PizarraYSidebar;
