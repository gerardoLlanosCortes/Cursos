console.log("******************* CUARTO ARCHIVO *****************");

const nombresMasculinosDos = [
  "Juan",
  "Pedro",
  "Andrés",
  "Carlos",
  "Miguel",
  "Alejandro",
  "Luis",
  "José",
  "Pedro",
  "Gabriel",
  "David",
];

//! map -> ejecutar una funcion por cada elemento y crea un nuevo arreglo con los elementos devueltos (si se hace un filtro mantiene los que no cumplen como undefined)
const nombresMayus = nombresMasculinosDos.map((nombre) => nombre.toUpperCase());
console.log(nombresMayus);

//! filter -> ejecuta una funcion por cada elemento y crea un arreglo nuevo devolviendo lo que cumple con la condicion
const nombresCuatroLetras = nombresMasculinosDos.filter((nombre) => {
  if (nombre.length === 4) {
    return nombre;
  }
});
console.log(nombresCuatroLetras);

//! includes -> Permite saber si el arreglo contiene un elemento especificado
console.log(nombresMasculinosDos.includes("Luis"));

//! every -> permite ejecutar un condicional sobre cada elemento (devuelve true si todos son verdaderos)
const nombresVaidos = nombresMasculinosDos.every((nombre) => {
  if (typeof nombre === "string") {
    return true;
  } else {
    return false;
  }
});
console.log(nombresVaidos);

//! some -> devuelve verdadero si algunos cumplen la condicion
const nombresVaidosDos= nombresMasculinosDos.some((nombre) => {
  if (typeof nombre !== "string") {
    return true;
  } else {
    return false;
  }
});
console.log(nombresVaidosDos);