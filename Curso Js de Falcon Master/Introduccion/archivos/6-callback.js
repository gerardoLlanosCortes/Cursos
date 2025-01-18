//! funciones que se pasan como parametros a otra funcion
//! ejecutar una funion dentro de otra
//! se utiliza en librerias, donde invoca la funcion que nosotros damos

const obtenerPostDeUsuario = (usuario, callback) => {
  console.log(`Obteniendo los posts de ${usuario}...`);

  setTimeout(() => {
    let posts = ["Post1", "Post2", "Post3"];
    callback(posts)
  }, 2000);
};

obtenerPostDeUsuario("carlos", (posts) => {
  console.log(posts);
});
//* Ejemplo de Callback
