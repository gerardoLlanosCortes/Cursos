//! Objeto
// const producto = {
//   nombre: "Tablet",
//   precio: 300,
//   disponible: true,
// };
// console.log(producto); //Devuelve el producto

//! Destructuring -> Sacar variables de un objeto
// const { nombre, precio, disponible, imagen } = producto;
// console.log(nombre); //Devuelve Tablet
// console.log(imagen); //Devuelve undefined

//! Object literal Enhacement -> Se crea sin necesidad de los :
// const autenticado = true;
// const usuario = "Juan";

// const nuevoObjeto = {
//   autenticado,
//   usuario,
// };
// console.table(nuevoObjeto); //Devuelve el objeto como tabla

//********** OBJETOS / MANIPULACIÓN **********

// const producto2 = {
//   nombre: "Tablet",
//   precio: 300,
//   disponible: true,
// };

//! Cambiar datos
// producto2.nombre = "Monitor curbo";
// console.table(producto2); //Devuelve el objeto pero con el nombre cambiado

//! Agregar datos
// producto2.imagen = "imagen.jpg";
// console.table(producto2); //Devuelve el objeto con el nuevo dato

//! Eliminar propiedad
// delete producto2.imagen;
// console.table(producto2); //Elimina la propiedad imagen del objeto

//! BigMethods -> Si queremos que nadie pueda modificar el objeto
// Object.freeze(producto2); //Freeze -> Ya no se podrá realizar nada en el objeto

// Object.seal(producto2); //Seal -> Solo permite modificar lo existente

//********** OBJETOS / Destructuring **********
// const producto3 = {
//   nombre: "Tablet",
//   precio: 300,
//   disponible: true,
// };

// const cliente = {
//   nombre: "Juan",
//   premium: true,
// };

// const { nombre, precio, disponible } = producto3;
// const { nombre: nombreCliente, premium } = cliente; //Se agrega un Alias

// console.log(nombre, nombreCliente); //Devuelve Tables y Juan

//********** OBJETOS / UNIR 2 OBJETOS O MAS **********
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
  };

  const cliente = {
    nombre: "Juan",
    premium: true,
  };

const nuevoObjeto = {
    producto: {...producto}, 
    cliente: {...cliente}
}
console.log(nuevoObjeto)