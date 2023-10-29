import React from "react";
import {Link} from 'react-router-dom';
import styles from '/css/login.css?inline';
import $ from 'jquery';

    $(document).ready(function(){
        $("#submit").click(function(){
            event.preventDefault();
            var email = $("#email").val();
            var contra = $("#password").val();
            var validateMail = false;
            var validatePass = false;
    
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
            }
        })
    })



function validarCorreoElectronico(correo) {
    // Expresión regular para validar direcciones de correo electrónico
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  
    // Usar el método test para verificar si el correo coincide con la expresión regular
    return expresionRegular.test(correo);
  }

function Login(){
    return (
        <>
        <div className={styles.body}>
            <section id="Login" className={styles.section}>
                <form className={styles.form} noValidate>
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
                    <button type="submit" className={styles.button} id="submit">Iniciar sesión</button>
                </form>
            </section>
            
            <section className={styles.section}>
                <div>
                    <h2>Iniciar sesión</h2>
                    <p>o</p>
                    <div>
                        <Link to={'/Registro'}><button className={styles.button}>Crear cuenta</button></Link>
                        <Link to={'/InicioPagina'}><button className={styles.button}>Inicio</button></Link>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};
export default Login;