const fetchGeneros = async (filtro = "movie") => {
  const url =
    `https://api.themoviedb.org/3/genre/${filtro}/list?api_key=96610e8d37e3e0c6d1940da423fca302&language=es-MX`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.genres;
  } catch (e) {
    console.log(e);
  }
};

export default fetchGeneros;
