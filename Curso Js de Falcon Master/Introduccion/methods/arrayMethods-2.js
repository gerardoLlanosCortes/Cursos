console.log("******************* SEGUNDO ARCHIVO *****************");

const dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

console.log(dias);

//! shift -> elimina el primer elemento de un arreglo
const diaEliminado = dias.shift();
console.log(diaEliminado);
console.log(dias);

//! unshift -> agrega un elemento al inicio del arreglo
dias.unshift("Lunes");
console.log(dias);

//! splice -> permite insertar un arreglo donde le especifiquemos
// *1er parametro -> Posicion donde queramos comenzar a insertar
// *2do parametro -> Si queremos eliminar elementos del arreglo desde la posicion indicada
// *Resto del parametro -> Los elementos a insertar
const amigos = ["Alejandro", "Cesar", "Manuel"];
amigos.splice(1, 2, "Rafael", "Roberto");
console.log(amigos);

//! slice -> permite copiar una parte de un arreglo a otro
// *1er parametro -> Posicion donde queramos copiar
// *2do parametro -> Hasta que elemento copiar
const frutas = [
  "Manzana",
  "Plátano",
  "Naranja",
  "Pera",
  "Sandía",
  "Fresa",
  "Piña",
];

console.log(frutas);
const frutasFavoritas = frutas.slice(1, 4)
console.log(frutasFavoritas);


