const boton1 = document.getElementById("boton1");
const primeraCaja = document.querySelector(".caja")
const cajas = document.querySelectorAll(".caja")


boton1.addEventListener("click", (e) => {
  console.log("click en boton");
  primeraCaja.classList.toggle("activa")
});

cajas.forEach((caja) => {
    caja.addEventListener("click", (e) => {
        console.log("Hiciste click en " + e.target.textContent);
    })
})

