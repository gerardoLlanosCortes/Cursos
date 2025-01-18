class Usuario {
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
  }

  obtenerPost() {
    const post = ["post1", "post2"];
    return post;
  }
}

class Moderador extends Usuario {
  constructor(usuario, password, permisos) {
    super(usuario, password);
    this.permisos = permisos;
  }

  borrarPost(id){
    if(this.permisos.includes("borrar")){
        return "El post ha sido borrado";
    }else{
        return "No tienes los permisos para borrar post"
    }
  }
}

const user = new Usuario("Carlos", "123");
console.log(user.obtenerPost());

const user2 = new Moderador("Arturo", "456", ["borrar", "editar"]);
console.log(user2.obtenerPost());
console.log(user2.permisos);
console.log(user2.borrarPost(7));
// console.log(user1.permisos);
