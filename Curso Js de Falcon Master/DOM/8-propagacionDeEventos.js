const contenedor = document.getElementById("contenedor1")
contenedor.addEventListener("click", e => {
    console.log("Hiciste click en el contenedor");
})

const primeraCaja = document.querySelector(".caja")
primeraCaja.addEventListener("click", e => {
    e.stopPropagation()
    console.log("hiciste click en la caja 1");
})