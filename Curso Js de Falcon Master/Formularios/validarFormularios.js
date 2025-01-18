const formulario = document.querySelector("#formulario-donacion")

formulario.addEventListener("submit", e =>{
    e.preventDefault()

    const datos = {
        correo : formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario["terminos-y-condiciones"].checked
    }

    if(datos.correo.length <= 2){
        console.log("Correo inválido");
        return
    }

    if(datos.pais === ""){
        console.log("País inválido");
        return
    }

    if(datos.donacion === ""){
        console.log("Debe seleccionar una cantidad a donar");
        return
    }

    if(datos.fecha === ""){
        console.log("Selecciona una fecha");
        return
    }

    if(!datos.terminos){
        console.log("Debe aceptar los terminos y condiciones");
        return
    }

    console.log(datos);

})