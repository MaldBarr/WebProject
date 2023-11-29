import { useState } from 'react';
import UsuarioCard from './UsuarioCard'; // Asegúrate de que la ruta sea correcta
import styles from '/css/gestionUsuarios.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function GestionUsuarios() {
    //const [busqueda, setBusqueda] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    // Realizar app.get desde el backend para obtener los usuarios de la base de datos
    // y luego reemplazar el array de usuarios inicial con los usuarios obtenidos
    useEffect(() => {
        console.log("useEffect");
        axios.get('http://localhost:3000/cuentaAdmin').then((response) => {
            console.log("datos: "+response.data);
            setUsuarios(response.data);
        }).catch((error) => {
            console.log("no funciona"+error);
        });
    }, []);


    //const usuariosFiltrados = usuarios.filter(usuario => usuario.nombre.includes(busqueda));

    return (
        <div id={styles.gestionUsuarios}>
            <div className={styles.container}>
                {/*<input className={styles.busqueda} type="text" value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar" />*/}
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Rut</th>
                            <th>Region</th>
                            <th>Comuna</th>

                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <UsuarioCard key={index} username={usuario.username} email={usuario.email} rut={usuario.rut} region={usuario.region} comuna={usuario.comuna}/>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link to="/EliminarMiCuentaAdmin">
                <button className={styles.eliminarMiCuenta}> Eliminar mi cuenta </button>
            </Link>
        </div>
    );
}

export default GestionUsuarios;
