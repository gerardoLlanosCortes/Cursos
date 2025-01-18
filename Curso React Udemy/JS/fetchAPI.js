const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

//! Fetch API
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((resultado) => {
    resultado.forEach((comentario) => {
      console.table(comentario);
    });
  });

//! Fetch API - Async Await
const consultarApi = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
};
consultarApi()

//! Fetch API - Multiples llamados si no depende una de otra
const consultarApis = async () => {
  const inico = performance.now();

  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]); //Para evitar problemas de performance utilizamos promise.all para arrancar los dos al mismo tiempo
  const resultado = await respuesta.json();
  const resultado2 = await respuesta2.json();
  console.log(resultado);
  console.log(resultado2);

  const fin = performance.now();

  console.log("Ejecucion", fin);
};
consultarApis();
