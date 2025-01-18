import data from "../datos/fotos";

const galeria = document.getElementById("galeria");

const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria.querySelector(".galeria__imagen").src = ruta;
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
  galeria.querySelector(".galeria__titulo").textContent = nombre;
  galeria.querySelector(".galeria__descripcion-imagen-activa").textContent =
    descripcion;

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  let indexImagenActual;

  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  // marcamos como activa
  if (galeria.querySelectorAll(".galeria__carousel-slide").length > 0) {
    // eliminamos la que estaba activa
    galeria
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    galeria
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idImagenActual =
    parseInt(galeria.querySelector(".galeria__imagen").dataset.idImagen);

  let indexImagenAcutal;
  fotos.forEach((foto, index) => {
    if(foto.id === idImagenActual){
      indexImagenAcutal = index
    }
  })

  if (direccion === "siguiente") {
    if(fotos[indexImagenAcutal + 1]){
      const {id, nombre, ruta, descripcion} = fotos[indexImagenAcutal + 1]
      cargarImagen(id, nombre, ruta, descripcion)
    }
  } else if (direccion === "anterior") {
    if(fotos[indexImagenAcutal -1]){
      const {id, nombre, ruta, descripcion} = fotos[indexImagenAcutal - 1]
      cargarImagen(id, nombre, ruta, descripcion)
    }
  }
};

export { cargarImagen, cargarAnteriorSiguiente };
