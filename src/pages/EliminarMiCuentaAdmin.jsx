import styles from '/css/eliminarCuenta.module.css';

function EliminarMiCuentaAdmin() {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Usuario" />
            <button>Eliminar mi Cuenta</button>
        </div>
    );
}

export default EliminarMiCuentaAdmin;
