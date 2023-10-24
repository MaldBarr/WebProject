$(document).ready(function(){
    $("button").click(function(){
        event.preventDefault();
        var email = $("#email").val();
        var contra = $("#password").val();

        if (!validarCorreoElectronico(email)){
            $("#1").text("Correo invalido");
        }
        else{
            $("#1").text("");
        }
        if (contra == "") {
            $("#2").text("Ingresa una contraseña");
        } else {
            $("#2").text("");
        }
    })
})

function validarCorreoElectronico(correo) {
    // Expresión regular para validar direcciones de correo electrónico
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  
    // Usar el método test para verificar si el correo coincide con la expresión regular
    return expresionRegular.test(correo);
  }