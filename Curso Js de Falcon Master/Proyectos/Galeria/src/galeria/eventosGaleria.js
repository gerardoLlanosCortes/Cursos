import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";
import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";

const galeria = document.getElementById("galeria");

galeria.addEventListener("click", (e) => {
  const boton = e.target.closest("button");
  if (boton?.dataset?.accion === "cerrar-galeria") {
    // console.log("cerrar galeria");
    cerrarGaleria();
  }

  if (e.target.dataset.id) {
    // console.log("cerrar galeria");
    slideClick(e);
  }

  if (boton?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }

  if (boton?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }

  if (boton?.dataset?.accion === "siguiente-slide") {
    carousel("siguiente")
  }

  if (boton?.dataset?.accion === "anterior-slide") {
    carousel("anterior")
    
  }
});
