//! this -> representa algo distinto dependiendo de cuando se use

//? Fuera de una funcion o bloque -> va a ser el objeto global de window
console.log(this);

//? Dentro de una funcionde tipo flecha -> objeto global
const miFuncion = () => {
  console.log(this);
};
miFuncion();

//? Cuando se utiliza dentro de un evento se va a referir al evento que se presiona
document.getElementById("texto").addEventListener("click", function () {
  console.log(this);
});

//? Dentro de un metodo this representa el objeto
class Usuario {
  constructor(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;
    console.log(this);
  }

  miMetodo(){
    console.log(this);
  }

}

const nuevoUsuario = new Usuario("Carlos", 23);
nuevoUsuario.miMetodo()
