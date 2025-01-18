import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchBusqueda = async (pagina = 1) => {
  const tipo = document.querySelector(".main__filtros .btn--active")?.id;
  const idGenero = document.querySelector("#filtro-generos .btn--active")
    ?.dataset.id;

  const añoInicial = document.querySelector("#años-min").value || 1950;
  const añoFinal = document.querySelector("#años-max").value || 2023;

  let url;

  if (tipo === "movie") {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=96610e8d37e3e0c6d1940da423fca302&language=es-MX&page=${pagina}&release_date.gte=${añoInicial}&release_date.lte=${añoFinal}&sort_by=popularity.desc&with_genres=${idGenero}`;
  } else if (tipo === "tv") {
    url = `https://api.themoviedb.org/3/discover/tv?api_key=96610e8d37e3e0c6d1940da423fca302&first_air_date.gte=${añoInicial}&first_air_date.lte=${añoFinal}&language=es-MX&page=${pagina}&sort_by=popularity.desc&with_genres=${idGenero}`;
  }

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const resultados = datos.results;

    const generos = await fetchGeneros();
    resultados.forEach((resultado) => {
      resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
    });

    return resultados;
  } catch (e) {
    console.log(e);
  }
};

export default fetchBusqueda;
