const formulario = document.querySelector("#formulario-donacion")

formulario.addEventListener("submit", e =>{
    e.preventDefault()

    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const datos = {
        correo : formulario.correo.value,
    }

    if(!expresionRegular.test(datos.correo)){
        console.log("Correo inválido");
        return
    }


    console.log(datos);

})