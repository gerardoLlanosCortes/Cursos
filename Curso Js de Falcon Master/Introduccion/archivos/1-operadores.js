//! Spread operator -> permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio
const frutas = [
  "Manzana",
  "Plátano",
  "Naranja",
  "Pera",
  "Sandía",
  "Fresa",
  "Piña",
];
const comidas = ["Pizza", "Hamburguesa", ...frutas];
console.log(comidas);

const datosLogin = {
  nombre: "Arturo",
  correo: "correo@mail.com",
  password: "123",
};

const usuario = {
  nombre: "Carlos",
  edad: 27,
  ...datosLogin,
};

console.log(usuario);

//! Parametros REST -> permite que una funcion tenga un numero indefinido de argumentos, los argumentos extra los convierte en arreglo
const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
  console.log(nombre, correo, datosAdicionales);
};

registrarUsuario("Carlos", "carlos@mail.com", 27, "España");

//! Destructuración de objetos
//* Arreglos
const amigos = ["Juan", "María", "Carlos"];
// const primerAmigo = amigos[0]
// const segundoAmigo = amigos[1]
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);

//* objetos
const persona = {
  nombre: "Carlos",
  edad: 27,
  pais: "Chile",
};
const { nombre, pais } = persona;
console.log(nombre, pais);

//* Funciones
const mostrarEdad = ({ nombre, edad }) => {
  console.log(nombre, "tiene ", edad);
};
mostrarEdad(persona);
