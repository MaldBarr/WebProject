import { useState } from 'react';
import styles from '/css/sidebarPizarra.module.css'; // Asegúrate de que la ruta sea correcta
import EstructuraCategoriaCard from './EstructuraCategoriaCard';

function SidebarPizarra() {
    const [isActive, setIsActive] = useState(true);
    const [activeSection, setActiveSection] = useState(null);
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };
    return (
        <div id={styles.sidebarPizarra} className={isActive ? styles.active : ""} >
            <div className={styles.toggleBtn} onClick={toggleSidebar}>
                <span>☰</span>
            </div>
            <h2> Estructuras de <br></br>datos </h2>
            <h3 onClick={() => toggleSection('Arreglos')}> Arreglos </h3>
            {activeSection === 'Arreglos' && <EstructuraCategoriaCard images={[{nameImg: "linkedList", altImg: "LinkedList"}, 
            {nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node"},
            {nameImg: "DoubleLinkedlist", altImg: "Double linked list"},
            {nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node"}]} />}

            <h3 onClick={() => toggleSection('Listas')}> Listas </h3>
            {activeSection === 'Listas' && <EstructuraCategoriaCard images={[{nameImg: "linkedList", altImg: "LinkedList"}, 
            {nameImg: "linkedListWithGhostNode", altImg: "Linked list with ghost node"},
            {nameImg: "DoubleLinkedlist", altImg: "Double linked list"},
            {nameImg: "DoubleLinkedlistWithGhostNode", altImg: "Double linked list with ghost node"}]} />}
            <h3> Arboles </h3>
            <h3> Pilas y colas </h3>
            <h3> Otros </h3>
        </div>
    );
}

export default SidebarPizarra;
