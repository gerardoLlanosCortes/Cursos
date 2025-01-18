import cargarTitulos from "./cargarTitulos";
import fetchBusqueda from "./fetchBusqueda";

const anterior = document.getElementById("pagina-anterior");
const siguiente = document.getElementById("pagina-siguiente");

siguiente.addEventListener("click", async (e) => {
  const paginaActual = document.getElementById("populares").dataset.pagina;

  try {
    const resultados = await fetchBusqueda(parseInt(paginaActual) + 1);
    document
      .getElementById("populares")
      .setAttribute("data-pagina", parseInt(paginaActual) + 1);
    cargarTitulos(resultados);
    window.scrollTo(0, 0);
  } catch (err) {
    console.log(err);
  }
});

anterior.addEventListener("click", async (e) => {
  const paginaActual = document.getElementById("populares").dataset.pagina;

  if (paginaActual > 1) {
    try {
      const resultados = await fetchBusqueda(parseInt(paginaActual) - 1);
      document
        .getElementById("populares")
        .setAttribute("data-pagina", parseInt(paginaActual) - 1);

      cargarTitulos(resultados);
      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err);
    }
  }
});
