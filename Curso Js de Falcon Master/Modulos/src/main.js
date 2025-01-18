//! Named imports
// import { nombre as nombreImportado, obtenerPosts } from "./nameExports";
// console.log(nombreImportado);
// console.log(obtenerPosts());

//! Namespace imports
// import * as datos from './nameExports'
// console.log(datos.nombre);
// console.log(datos.obtenerPosts());

//! Default imports
import ObtenerUser from "./defaultExport";
console.log(ObtenerUser());

//! Empty imports -> carga todo el codigo pero sin hacer ningun objeto
import './emptyExport'