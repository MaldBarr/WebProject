import styles from '/css/eliminarCuenta.module.css';

function EliminarMiCuenta() {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <button>Eliminar mi Cuenta</button>
        </div>
    );
}

export default EliminarMiCuenta;
