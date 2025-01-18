import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchPopulares = async (filtro = "movie") => {
  const url =
    `https://api.themoviedb.org/3/${filtro}/popular?api_key=96610e8d37e3e0c6d1940da423fca302&language=es-MX&page=1&region=US`;

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

export default fetchPopulares;
