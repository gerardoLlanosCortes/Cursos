'use strict';

//! forma 1
// export default () => {
//     return {
//         nombre: "Carlos",
//         correo: "correo@correo.com"
//     }
// }

//! forma 2
const obtenerUsuario = () => {
  return {
    nombre: "Carlos",
    correo: "correo@correo.com",
  };
};

console.log("Soy codigo que se ejecuta desde empty export");

//! Named imports
// import { nombre as nombreImportado, obtenerPosts } from "./nameExports";
// console.log(nombreImportado);
// console.log(obtenerPosts());

console.log(obtenerUsuario());
