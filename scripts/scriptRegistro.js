//$.getJSON("JSON/regiones.JSON")

function cargaRegional(){
    const select = $('#sel_region');
    select.append(regiones.map(region => `<option value="${region.id}">${region.nombre}</option>`));
}


function validaDV() {
    var rut = document.getElementById("rut");
    // Se separa el número del dígito verificador
    const [numero, dv] = rut.replace('-K', '-k').split('-');

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