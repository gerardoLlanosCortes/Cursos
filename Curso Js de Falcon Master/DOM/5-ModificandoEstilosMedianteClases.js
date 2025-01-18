const primeraCaja = document.querySelector("#contenedor1 .caja");
console.log(primeraCaja.classList);

const agregarClase = () => {
  primeraCaja.classList.add("activa");
};

const eliminarClase = () => {
  primeraCaja.classList.remove("activa");
};

const toggleClase = () => {
    primeraCaja.classList.toggle("activa")
}

const comprobarClase = () => {
    console.log(primeraCaja.classList.contains("activa"));
}
