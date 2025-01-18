import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const filtroPelicula = document.querySelector(".main__filtros #movie");
const filtroShow = document.querySelector(".main__filtros #tv");

filtroPelicula.addEventListener("click", async (e) => {
  e.preventDefault();
  filtroPelicula.classList.add("btn--active");
  filtroShow.classList.remove("btn--active");

  cargarGeneros("movie");
  const resultados = await fetchPopulares("movie");
  cargarTitulos(resultados);

  document.querySelector("#populares .main__titulo").innerText =
    "Peliculas Populares";
});

filtroShow.addEventListener("click", async (e) => {
  e.preventDefault();
  filtroShow.classList.add("btn--active");
  filtroPelicula.classList.remove("btn--active");

  cargarGeneros("tv");
  const resultados = await fetchPopulares("tv");
  cargarTitulos(resultados);

  document.querySelector("#populares .main__titulo").innerText =
    "Series Populares";
});
