$(document).ready(function(){
    $("button").click(function(){
        event.preventDefault();
        var nombre = $("#Username").val();
        var rut = $("#rut").val();
        var email = $("#Email").val();
        var region = $("#sel_region").val();
        var comuna = $("#comuna").val();
        var contra = $("#password").val();
        var contra2 = $("#password2").val();


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
});


function validaDV(rut) {
    // Se separa el número del dígito verificador
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