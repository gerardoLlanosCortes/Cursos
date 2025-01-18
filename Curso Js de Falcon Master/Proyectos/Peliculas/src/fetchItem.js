const fetchItem = async (id) => {
  const tipo = document.querySelector(".main__filtros .btn--active").id;

  try {
    const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=96610e8d37e3e0c6d1940da423fca302&language=es-MX`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  } catch (err) {
    console.log(err);
  }
};

export default fetchItem;
