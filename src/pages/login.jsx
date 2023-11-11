import {Link} from 'react-router-dom';
import styles from '/css/login.module.css';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
    $(document).ready(function(){
        validateLogin();

       
    })

function validateLogin(){
    let validated = false;
    /* VERSION ANTIGUA ESTABA EN     $(document).ready(function(){
    $("#submitLogin").click(function(){
        event.preventDefault();
        var email = $("#email").val();
        var contra = $("#password").val();
        var validateMail = false;
        var validatePass = false;
        console.log("se ejecuto login")
        if (!validarCorreoElectronico(email)){
            $("#1").text("Correo invalido");
            validateMail = false;
        }
        else{
            $("#1").text("");
            validateMail = true;
        }
        if (contra == "") {
            $("#2").text("Ingresa una contraseña");
            validatePass = false;
        } else {
            $("#2").text("");
            validatePass = true;
        }
        if (validatePass && validateMail){
            //cargar Cuenta
            console.log("log exitoso");
            validated = true;
            

        }
    })*/
    var email = $("#email").val();
        var contra = $("#password").val();
        var validateMail = false;
        var validatePass = false;
        console.log("se ejecuto login")
        if (!validarCorreoElectronico(email)){
            $("#1").text("Correo invalido");
            validateMail = false;
        }
        else{
            $("#1").text("");
            validateMail = true;
        }
        if (contra == "") {
            $("#2").text("Ingresa una contraseña");
            validatePass = false;
        } else {
            $("#2").text("");
            validatePass = true;
        }
        if (validatePass && validateMail){
            //cargar Cuenta
            console.log("log exitoso");
            validated = true;
        }
    return validated;
}

function validarCorreoElectronico(correo) {
    // Expresión regular para validar direcciones de correo electrónico
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    // Usar el método test para verificar si el correo coincide con la expresión regular
    return expresionRegular.test(correo);
  }

function Login(){
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateLogin()){
            navigate("/proyectos");
        }
    }
    return (
        <>
        <div className={styles.login}>
            <section id="Login" className={styles.mainSection}>
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <h2>Identificate</h2>
                    <p>Usa tu email y contraseña para Identificarte</p>
                    <input type="email" placeholder="Email" id="email" required={true} className={styles.input}/>
                    <p id={1} />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        id="password"
                        required={true}
                        className={styles.input}    
                    />
                    
                    <p id={2} />
                    <button type="submit" className={styles.button} id="submitLogin">
                        Iniciar sesión
                    </button>
                </form>
            </section>
            
            <section className={styles.section2} id="xd">
                <div className={styles.optionsToGo}>
                    <h2>Iniciar sesión</h2>
                    <p>o</p>
                    <div className={styles.links}>
                        <Link to={'/Registro'}><button className={styles.button}>Crear cuenta</button></Link>
                        <Link to={'/InicioPagina'}><button className={styles.button}>Inicio</button></Link>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
export default Login;