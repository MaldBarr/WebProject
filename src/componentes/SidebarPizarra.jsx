import { useState } from 'react';
import styles from '/css/sidebarPizarra.module.css'; // Asegúrate de que la ruta sea correcta
import EstructuraCategoriaCard from './EstructuraCategoriaCard';

function SidebarPizarra() {
    const [isActive, setIsActive] = useState(true);
    const [activeSections, setActiveSections] = useState({});
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
    const toggleSection = (section) => {
        setActiveSections({...activeSections, [section]: !activeSections[section]});
    };
    return (
        <div id={styles.sidebarPizarra} className={isActive ? styles.active : ""} >
            <div className={styles.toggleBtn} onClick={toggleSidebar}>
                <span>☰</span>
            </div>
            <h2> Estructuras de <br></br>datos </h2>
            <h3 onClick={() => toggleSection('Arreglos')}> Arreglos </h3>
            {activeSections.Arreglos && <EstructuraCategoriaCard images={[
            {nameImg: "array", altImg: "Array"},
            {nameImg: "matrix", altImg: "Matrix", "cuadrado":true}]}/>}

            <h3 onClick={() => toggleSection('Listas')}> Listas </h3>
            {activeSections.Listas && <EstructuraCategoriaCard images={[{nameImg: "linkedList", altImg: "LinkedList"}, 
            {nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node"},
            {nameImg: "DoubleLinkedlist", altImg: "Double linked list"},
            {nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node"},
            {nameImg: "circularLinkedList", altImg: "Circular linked list", "cuadrado" : true},
            {nameImg: "circularLinkedListWithGhostNode", altImg: "Circular linked list with ghost node","cuadrado" : true},
            {nameImg: "circularDoubleLinkedList", altImg: "Circular Double linked list with ghost node","cuadrado" : true},
            {nameImg: "circularDoubleLinkedListWithGhostNode", altImg: "Circular Double linked list with ghost node","cuadrado" : true}
        ]} />}
            
            <h3 onClick={() => toggleSection('Arboles')}> Arboles </h3>
            {activeSections.Arboles && <EstructuraCategoriaCard images={[{nameImg: "ABB", altImg: "Binary three",'cuadrado':true}]} />}
            
            <h3 onClick={() => toggleSection('PilasColas')}> Pilas y colas </h3>
            {activeSections.PilasColas && <EstructuraCategoriaCard images={[{nameImg: "linkedList", altImg: "LinkedList"}, 
            {nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node"},
            {nameImg: "DoubleLinkedlist", altImg: "Double linked list"},
            {nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node"}]} />}
           
            <h3 onClick={() => toggleSection('otros')}> Otros </h3>
            {activeSections.otros && <EstructuraCategoriaCard images={[{nameImg: "node", altImg: "Nodo", "cuadrado":true}]} />}
        </div>
    );
}

export default SidebarPizarra;
