//! getElementByID -> obtener elemento por su id
const contenedor1 = document.getElementById("contenedor1");
console.log(contenedor1);

//! children -> nos permite obtener los elementos hijos
console.log(contenedor1.children);

//! parentElement -> nos permite obtener el elemento padre
console.log(contenedor1.parentElement);

//! getElementsByTagName -> nos permite obtener una coleccion de elementos en base a una etiqueta
const divColeccion = document.getElementsByTagName("div");
console.log(divColeccion);

//! getElementByClassName
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

//! querySelector
const caja = document.querySelector("#contenedor1 .caja");
console.log(caja);

//! querySelectorAll
const cajas = document.querySelectorAll("#contenedor1 .caja");
console.log(cajas);

cajas.forEach((caja) => {
    console.log(caja);
})

//! closest -> busqueda desde adentro hacia afuera (en busqueda de los padres)
const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child")
console.log(ultimaCaja);
console.log(ultimaCaja.closest(".contenedor-principal"));