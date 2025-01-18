const caja = document.querySelector(".contenedor .caja");
console.log(caja);

//! innerHTML
console.log(caja.innerHTML);
caja.innerHTML = "<b>Hola</b>"

//! attribute
caja.id = "nuevo-id"

//! setAttribute -> crear atributos mas personalizados
caja.setAttribute("class", "caja activa")
caja.setAttribute("data-id", "123-456")

//! style -> modificare estilos
const contenedor2Caja1 = document.querySelector("#contenedor2 .caja")
console.log(contenedor2Caja1); 
contenedor2Caja1.style.background = "#000"
contenedor2Caja1.style.color = "#fff"