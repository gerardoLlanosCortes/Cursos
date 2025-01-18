document.getElementById("boton1").addEventListener("click", (e) => {
  const nombre = prompt("Escribe tu nombre");
  window.localStorage.setItem("usuario", nombre);
});

document.getElementById("boton2").addEventListener("click", (e) => {
  window.localStorage.removeItem("usuario");
});

if (window.localStorage.usuario) {
  // console.log("hola", window.localStorage.usuario);
} else {
  // console.log("Hola anonimo");
}
