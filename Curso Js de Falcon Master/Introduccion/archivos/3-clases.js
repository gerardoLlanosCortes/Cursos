//! Estructura de una clase
//* - Definicion
//* - Propiedades: variables
//* - Constructor: método para incializar un objeto creado a partir de la clase
//* - Métodos: Funciones

class Usuario {
  tipo = "usuario";

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    console.log("nuevo usuario registrado", this.nombre, this.apellido);
  }

  obtenerNombre(){
    console.log(this.nombre, this.apellido)

  }
}

const user = new Usuario("Roberto", "Manfinfla")
console.log(user);
user.obtenerNombre()