import datos from "../datos/fotos";
import { cargarImagen } from "./cargarImagen";

const slideClick = (e) => {
  let ruta, nombre, descripcion;

  // console.log("Hiciste click en un slide");
  const id = parseInt(e.target.dataset.id);
  const galeria = document.getElementById("galeria");
  const categoriaActiva = galeria.dataset.categoria;
  // console.log(id, categoriaActiva);

  datos.fotos[categoriaActiva].forEach((foto) => {
    if (foto.id === id) {
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  cargarImagen(id, nombre, ruta, descripcion);
};

export default slideClick;
