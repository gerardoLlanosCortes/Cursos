console.log("******************* TERCER ARCHIVO *****************");
const nombresMasculinos = [
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

//! indexOf -> devuelve el primer indice del elemento / si no lo encuentra devuelve -1
console.log(nombresMasculinos.indexOf("Pedro"));

//! lastIndexOf -> Obtenemos el ultimo indice del elemento
console.log(nombresMasculinos.lastIndexOf("Pedro"));

//! foreach -> ejecutamos una funciona por cada elemento dentro del arreglo
nombresMasculinos.forEach((nombre, index) => {
  console.log(`Hola nombres ${nombre} (${index})`);
});

//! find -> recorrer un arreglo y devuelve el primer elemento que retornemos
const resultado = nombresMasculinos.find((nombre) => {
  if (nombre[0] === "A") {
    return nombre;
  }
});
console.log(resultado);
