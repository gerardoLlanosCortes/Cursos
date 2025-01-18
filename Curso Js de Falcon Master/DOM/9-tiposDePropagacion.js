//! propagacion bubble (false) -> primero reacciona el evento hijo y luego el padre / POR DEFECTO SE USA ESTE
//! captura (true) ->  primero reacciona el evento padre

const contenedor = document.getElementById("contenedor1");
contenedor.addEventListener(
  "click",
  (e) => {
    console.log("Hiciste click en el contenedor");
  },
  true
);

const primeraCaja = document.querySelector(".caja");
primeraCaja.addEventListener("click", (e) => {
  console.log("hiciste click en la caja 1");
});
