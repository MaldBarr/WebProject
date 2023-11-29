import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '/css/InformacionCuenta.module.css'
import { Link } from 'react-router-dom';

function InformacionCuenta(props) {
    const [nombre, setNombre] = useState(props.nombre);
    const [email, setEmail] = useState(props.email);
    const [comuna, setComuna] = useState(props.comuna);
    const [rut, setRut] = useState(props.rut);
    const [region, setRegion] = useState(props.region);
    const [contrasena, setContrasena] = useState(props.contrasena);
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    return (
        <>
        <div className={styles.informacionCuenta}>
            <h2> <b> Mis datos </b></h2>
            <div className={styles.datos}>
                <div className={styles.containerColumnas}>
                    <div className={styles.column}>
                        <p> Nombre :  <input value={nombre} onChange={e => setNombre(e.target.value)}/></p>
                        <p> Email: <input value={email} onChange={e => setEmail(e.target.value)}/></p>
                        <p> Comuna: <input value={comuna} onChange={e => setComuna(e.target.value)}/></p>
                    </div>
                    <div className={styles.column}>
                        <p> Rut: <input value={rut} onChange={e => setRut(e.target.value)}/></p>
                        <p> Region: <input value={region} onChange={e => setRegion(e.target.value)}/></p>
                        <p> Contrasena: 
                            <input type={isPasswordShown ? "text" : "password"} value={contrasena} onChange={e => setContrasena(e.target.value)}/>
                            <button onClick={togglePasswordVisibility}>
                                {isPasswordShown ? 'Ocultar' : 'Mostrar'}
                            </button>
                        </p>
                    </div>
                </div>

            </div>
            <div className={styles.containerOpciones}>
                <button className={styles.guardar}> Guardar cambios </button>
                <Link to = '/EliminarMiCuenta'>
                <button className={styles.eliminarMiCuenta}> Eliminar mi cuenta </button>
                </Link>
            </div>
            
        </div>
        </>
    );
}

InformacionCuenta.propTypes = {
    nombre: PropTypes.string.isRequired,
    rut: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    comuna: PropTypes.string.isRequired,
    contrasena: PropTypes.string.isRequired
};

export default InformacionCuenta;
