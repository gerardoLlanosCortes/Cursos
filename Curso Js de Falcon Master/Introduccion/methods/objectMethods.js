// const usuario = {
//     nombre: "Carlos",
//     edad: 27,
//     amigos: ["Alejandro", "Cesar", "Manuel"]
// }

//! metodos propios o personalizados
const usuario = {
    nombre: "Carlos",
    edad: 27,
    amigos: ["Alejandro", "Cesar", "Manuel"],
    saludo: () => {
        console.log("Hola");
    }
}
usuario.saludo()

// metodos existentes en Object  
//! keys -> devuelve un arreglo con las llaves del objeto
console.log(Object.keys(usuario));

//! values -> devuelve un arreglo con los valores del objeto
console.log(Object.values(usuario));

//! entries -> devuelve un arreglo con las parejas de clave valor del objeto
console.log(Object.entries(usuario));