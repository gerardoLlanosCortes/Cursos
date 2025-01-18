class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  //! acceder a la funcion sin tener que crear un objeto de tipo usuario
  static borrar(id_usuario) {
    return "El usuario con el id " + id_usuario + " Ha sido borrado de la bd";
  }

  static registrados = 1000;
}

const usuario = new Usuario("Carlos", "correo@correo.com");
console.log(usuario);
// console.log(usuario.borrarUsuario(1));
console.log(Usuario.borrar(1));
console.log(Usuario.registrados);
