console.log(window.location.href);

//! obtener url de la pagina actual
console.log(location.href);

//! obtener el host
console.log(location.hostname);

//! ruta del archivo
console.log(location.pathname);

//! protocolo : http
console.log(location.protocol);

const cargarDocumento = () => {
  location.assign("http://google.com");
};

const regresar = () => {
  history.back();
};
