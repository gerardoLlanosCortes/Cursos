const obtenerGenero = (id, generos) => {
  let nombre;

  generos.forEach((elemento) => {
    if (elemento.id === id) {
      nombre = elemento.name;
    }
  });

  return nombre
};

export default obtenerGenero;
