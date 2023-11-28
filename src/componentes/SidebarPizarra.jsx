import { useState } from 'react';
import styles from '/css/sidebarPizarra.module.css'; 
import EstructuraCategoriaCard from './EstructuraCategoriaCard';
import PropTypes from 'prop-types';

function SidebarPizarra(props) {
    /*Funciones para animaciones del sidebar */
    const [isActive, setIsActive] = useState(true);
    const [activeSections, setActiveSections] = useState({});
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
    const toggleSection = (section) => {
        setActiveSections({...activeSections, [section]: !activeSections[section]});
    };
    console.log("::::" + props.binnedItems);
    return (
        <>
        {/* Boton para esconder y mostrar el sidebar*/}
        <div id={styles.toggleBtn} onClick={toggleSidebar} 
        className={isActive ? styles.active : ""}>
                <span>☰</span>
        </div>

        <div id={styles.sidebarPizarra} className={isActive ? styles.active : ""} >
            <h2> Estructuras de <br></br>datos </h2>
            <h3 onClick={() => toggleSection('Arreglos')}> Arreglos </h3>
            {activeSections.Arreglos && <EstructuraCategoriaCard binnedItems={props.binnedItems} images={[
            {nameImg: "array", altImg: "Array", "cuadrado":false},
            {nameImg: "matrix", altImg: "Matrix", "cuadrado":true}]}/>}

            <h3 onClick={() => toggleSection('Listas')}> Listas </h3>
            {activeSections.Listas && <EstructuraCategoriaCard binnedItems={props.binnedItems} images={[{nameImg: "linkedList", altImg: "LinkedList"}, 
            {nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node","cuadrado":false},
            {nameImg: "DoubleLinkedlist", altImg: "Double linked list","cuadrado":false},
            {nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node","cuadrado":false},
            {nameImg: "circularLinkedList", altImg: "Circular linked list", "cuadrado" : true},
            {nameImg: "circularLinkedListWithGhostNode", altImg: "Circular linked list with ghost node","cuadrado" : true},
            {nameImg: "circularDoubleLinkedList", altImg: "Circular Double linked list with ghost node","cuadrado" : true},
            {nameImg: "circularDoubleLinkedListWithGhostNode", altImg: "Circular Double linked list with ghost node","cuadrado" : true}
        ]} />}
            
            <h3 onClick={() => toggleSection('Arboles')}> Arboles </h3>
            {activeSections.Arboles && <EstructuraCategoriaCard binnedItems={props.binnedItems} images={[{nameImg: "ABB", altImg: "Binary three",'cuadrado':true}]} />}
            
            <h3 onClick={() => toggleSection('PilasColas')}> Pilas y colas </h3>
            {activeSections.PilasColas && <EstructuraCategoriaCard binnedItems={props.binnedItems} images={[{nameImg: "linkedList", altImg: "LinkedList","cuadrado":false}, 
            {nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node"},
            {nameImg: "DoubleLinkedlist", altImg: "Double linked list"},
            {nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node","cuadrado":false}]} />}
           
            <h3 onClick={() => toggleSection('otros')}> Otros </h3>
            {activeSections.otros && <EstructuraCategoriaCard binnedItems={props.binnedItems} images={[{nameImg: "node", altImg: "Nodo", "cuadrado":true}]} />}
        </div>
        </>
    );
}
SidebarPizarra.propTypes = {
    binnedItems: PropTypes.array.isRequired,
};

export default SidebarPizarra;
