import dataFotos from "./datos/fotos";
import { cargarImagen } from "./galeria/cargarImagen";

const contenedorCategorias = document.getElementById("categorias");
const galeria = document.getElementById("galeria");
const contenedorSlides = document.querySelector(".galeria__carousel-slides");

contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorSlides.innerHTML = "";
  // console.log(e.target.classList.contains("categoria"));
  if (e.target.closest("a")) {
    galeria.classList.add("galeria--active");
    document.body.style.overflow = "hidden";

    const categoriaActiva = e.target.closest("a").dataset.categoria;
    galeria.dataset.categoria = categoriaActiva


    const fotos = dataFotos.fotos[categoriaActiva];

    const { id, nombre, ruta, descripcion } = fotos[0];

    cargarImagen(id, nombre, ruta, descripcion);

    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" alt="" data-id="${foto.id}" />
        </a>
        `;

      contenedorSlides.innerHTML += slide;
    });

    galeria
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});
