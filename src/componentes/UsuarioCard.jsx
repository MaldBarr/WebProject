import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '/css/usuarioCard.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import axios from 'axios';

function UsuarioCard(props) {
    const [opcion, setOpcion] = useState('');

    const handleChange = (event) => {
        setOpcion(event.target.value);
        if (event.target.value === 'eliminar') {
            // Aquí puedes agregar la lógica para eliminar el usuario
        } else if (event.target.value === 'modificar') {
            // Aquí puedes agregar la lógica para modificar los datos del usuario
        }
    };

    function eliminarUser(){
        console.log("Eliminar usuario");
        axios.delete('http://localhost:3000/cuentaAdmin', {data: {username: props.username}}).then((response) => {
            console.log("datos: "+response.data);
            setOpcion(response.data);
        }).catch((error) => {
            console.log("no funciona"+error);
        });
    }

    return (
    <>  
    <tr className={styles.cardUsuario}>
        <td>
            <img className={styles.imgPerfil} alt="Imagen de perfil" />
        </td>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.rut}</td>
        <td>{props.region}</td>
        <td>{props.comuna}</td>
        <div className={styles.opciones}>
            <button value="modificar" onClick={handleChange}><FaEdit /> </button>
            <button value="eliminar" onClick={eliminarUser}><MdDelete /> </button>
            <button value="verMas" onClick={handleChange}><FaEye /></button>
        </div>
    </tr>
      
    </>
    );
}


UsuarioCard.propTypes = {
    key: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    rut: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    comuna: PropTypes.string.isRequired
};

export default UsuarioCard;
