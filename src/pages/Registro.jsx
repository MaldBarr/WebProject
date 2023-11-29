import {Link} from 'react-router-dom';
import FetchRegiones from "../assets/fetchRegiones.jsx";
import styles from '/css/login.module.css';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';


function Registro() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateRegister()){
            navigate("/inicioPagina");
        }
    }
    return (
        <>
        <div className={styles.login}>
            <section className={styles.section2}>
                <div className={styles.optionsToGo}>
                    <div>
                        <h2>Registrarse</h2>
                        <p>o</p> 
                    <div className={styles.links}>
                        <Link to={'/Login'}><button>Iniciar sesion</button></Link>
                        <Link to={'/InicioPagina'}><button>Inicio</button></Link>
                    </div>
                    </div>
                </div>
            </section>

            <section id="Login" className={styles.mainSection}>
                <form id="Registro" onSubmit={handleSubmit}  noValidate="">
                    <h2>Registrate</h2>
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        id="Username"
                        required=""
                    />
                    <p id={1} />
                    
                    <input type="text" placeholder="Rut" id="rut" name="rut" required="" />
                    <p id={2} />
            
                    <input type="email" placeholder="Email" id="Email" required="" />
                    <p id={3} />
            
                    <FetchRegiones/>
                    <p id={4} />
            
                    <input type="text" placeholder="Comuna" id="comuna" autoComplete="new-password"
required="" />
                    <p id={5} />
            
                   
                    <input 
                    type="password" 
                    placeholder="Contraseña" 
                    id="password" 
                    autoComplete="new-password"
                    required=""
                    />

                    <p id={6} />
            
                    <input
                        type="password"
                        placeholder="Confirmar Contraseña"
                        id="password2"
                        autoComplete="new-password"

                        required=""
                    />
                    <p id={7} />
                    
                    <div id="TermYcond">
                        <input type="checkbox" id="check" required="" />
                        <label><a href="terminosYcondiciones.md">Acepto terminos y condiciones</a>{" "}</label>
                    </div>
                    <p id={8} />
                    <div className="g-recaptcha" data-sitekey="6Ldq5R8pAAAAADi3Jv5bJquaJK4EeSi9UAVe3uH6" id={styles.recap}>
                    
                    </div>
                    <p id={9} />

                <button type="submit" id="submitRegister">Registrarse</button>
                </form>
            </section>
        </div>
        </>
    );
}
export default Registro;

function validateRegister(){
    var nombre = $("#Username").val();
    var rut = $("#rut").val();
    var email = $("#Email").val();
    var region = $("#sel_region").val();
    var comuna = $("#comuna").val();
    var contra = $("#password").val();
    var contra2 = $("#password2").val();
    console.log("se ejecuto registro")
    var numCosasVerificadas = 0 ;
    if (nombre == "") {
        $("#1").text("Ingresa un nombre");
    } else {
        numCosasVerificadas+=1;
        $("#1").text("");
    }

    if (!validaDV(rut)) {
        $("#2").text("Rut Invalido");
    }
    else {
        $("#2").text("");
        numCosasVerificadas+=1;

    }

    if (!validarCorreoElectronico(email)){
        $("#3").text("Correo invalido");
    }
    else{
        $("#3").text("");
        numCosasVerificadas+=1;

    }
    if (region === null){
        $("#4").text("Selecciona una region");
    }
    else{
        $("#4").text("");
        numCosasVerificadas+=1;

    }

    if (comuna == "") {
        $("#5").text("Ingresa tu comuna");
    } else {
        $("#5").text("");
        numCosasVerificadas+=1;

    }

    if (contra == "") {
        $("#6").text("Ingresa una contraseña");
    } else {
        $("#6").text("");
        numCosasVerificadas+=1;

    }
    if (contra2 == ""){
        $("#7").text("No puede estar vacio");
    } else if (contra != contra2) {
        $("#7").text("No son la misma contraseña");
    } else{
        $("#7").text("");
        numCosasVerificadas+=1;
    }
    if ($("#check").prop('checked')){
        $("#8").text("");
        numCosasVerificadas+=1;
    } else{
        $("#8").text("Debes aceptar los terminos");
    }
    if(numCosasVerificadas == 8) return true;
    return false;

}
/*
$(document).ready(function(){
    $("#submitRegister").click(function(){
        event.preventDefault();
        var nombre = $("#Username").val();
        var rut = $("#rut").val();
        var email = $("#Email").val();
        var region = $("#sel_region").val();
        var comuna = $("#comuna").val();
        var contra = $("#password").val();
        var contra2 = $("#password2").val();
        console.log("se ejecuto registro")



        if (nombre == "") {
            $("#1").text("Ingresa un nombre");
        } else {
            $("#1").text("");
        }

        if (!validaDV(rut)) {
            $("#2").text("Rut Invalido");
        }
        else {
            $("#2").text("");
        }

        if (!validarCorreoElectronico(email)){
            $("#3").text("Correo invalido");
        }
        else{
            $("#3").text("");
        }
        if (region === null){
            $("#4").text("Selecciona una region");
        }
        else{
            $("#4").text("");
        }

        if (comuna == "") {
            $("#5").text("Ingresa tu comuna");
        } else {
            $("#5").text("");
        }

        if (contra == "") {
            $("#6").text("Ingresa una contraseña");
        } else {
            $("#6").text("");
        }
        if (contra2 == ""){
            $("#7").text("No puede estar vacio");
        } else if (contra != contra2) {
            $("#7").text("No son la misma contraseña");
        } else{
            $("#7").text("");
        }
        if ($("#check").prop('checked')){
            $("#8").text("");
        } else{
            $("#8").text("Debes aceptar los terminos");
        }
    })
});*/


function validaDV(rut) {
    // Se separa el número del dígito verificador
    if(rut === undefined) return false;

    const [numero, dv] = rut.toString().replace('-K', '-k').split('-');

    // Aquí se debe aplicar módulo 11. La función se extrajo de:
    // https://validarutchile.cl/calcular-rut-en-javascript.php
    // ! OJO: Es una función que se llama a sí misma.
    const dvVer = ((T) => {
        let M=0,S=1;
        for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    })(numero);

    // Se compara el dígito verificador calculado con el ingresado
    console.log(dvVer == dv);
    return dvVer == dv;
}

function validarCorreoElectronico(correo) {
    // Expresión regular para validar direcciones de correo electrónico
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  
    // Usar el método test para verificar si el correo coincide con la expresión regular
    return expresionRegular.test(correo);
  }