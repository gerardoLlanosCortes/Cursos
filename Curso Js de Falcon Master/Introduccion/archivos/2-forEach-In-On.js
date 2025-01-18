//! foreach -> se usa para recorrer elementos
const amigos = ["Juan", "María", "Carlos"];
amigos.forEach((amigo) => console.log(amigo));

//! forin -> recorrer propiedades de objeto
const persona = {
  nombre: "Juan",
  edad: 30,
  correo: "juan@example.com",
};

for (const key in persona) {
  console.log(key);
}

//! forof -> permite recorrer un arreglo, cadenas, mapas y lista de nodos
for (const iterator of amigos) {
  console.log(iterator);
}

const etiquetas = document.head.children;
console.log(etiquetas);
for (const iterator of etiquetas) {
    console.log(iterator);
}
