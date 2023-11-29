import { useState } from 'react';
import UsuarioCard from './UsuarioCard'; // Asegúrate de que la ruta sea correcta
import styles from '/css/gestionUsuarios.module.css'
import { Link } from 'react-router-dom';

function GestionUsuarios() {
    const [busqueda, setBusqueda] = useState('');
    const [usuarios, setUsuarios] = useState([
        // Aquí puedes poner tus usuarios iniciales
        {nombre: 'usuario1', imgPerfil: 'public/Logo.png', email:'pepito@gmail.com',rut:'1111111',region:'Valparaiso',comuna:'Valparaiso'},
        {nombre: 'usuario2', imgPerfil: 'public/Logo.png', email:'pepito@gmail.com',rut:'1111111',region:'Valparaiso',comuna:'Valparaiso'},
    ]);

    const usuariosFiltrados = usuarios.filter(usuario => usuario.nombre.includes(busqueda));

    return (
        <div id={styles.gestionUsuarios}>
            <div className={styles.container}>
                <input className={styles.busqueda} type="text" value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar" />
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rut</th>
                            <th>Region</th>
                            <th>Comuna</th>

                        </tr>
                    </thead>
                    <tbody>
                        {usuariosFiltrados.map((usuario, index) => (
                            <UsuarioCard key={index} nombre={usuario.nombre} imgPerfil={usuario.imgPerfil} email={usuario.email} rut={usuario.rut} region={usuario.region} comuna={usuario.comuna}/>
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
