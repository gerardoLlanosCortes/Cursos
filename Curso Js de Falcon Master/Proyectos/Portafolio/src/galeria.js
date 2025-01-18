const trabajos = document.querySelector(".trabajos");
const ventanaTrabajos = document.querySelector("#ventana-trabajos");

const datos = [
  {
    id: "1",
    titulo: "Trabajo #1",
    texto:
      "Hola este es mi primer trabajo, en este desplegue todas mis habilidades las cuales son actualmente nulas XD",
    fecha: "1 Enero de 2023",
  },
  {
    id: "2",
    titulo: "Trabajo #2",
    texto:
      "Hola este es mi primer trabajo, en este desplegue todas mis habilidades las cuales son actualmente nulas XD",
    fecha: "1 Enero de 2023",
  },
  {
    id: "3",
    titulo: "Trabajo #3",
    texto:
      "Hola este es mi primer trabajo, en este desplegue todas mis habilidades las cuales son actualmente nulas XD",
    fecha: "1 Enero de 2023",
  },
  {
    id: "4",
    titulo: "Trabajo #4",
    texto:
      "Hola este es mi primer trabajo, en este desplegue todas mis habilidades las cuales son actualmente nulas XD",
    fecha: "1 Enero de 2023",
  },
  {
    id: "5",
    titulo: "Trabajo #5",
    texto:
      "Hola este es mi primer trabajo, en este desplegue todas mis habilidades las cuales son actualmente nulas XD",
    fecha: "1 Enero de 2023",
  },
  {
    id: "6",
    titulo: "Trabajo #6",
    texto:
      "Hola este es mi primer trabajo, en este desplegue todas mis habilidades las cuales son actualmente nulas XD",
    fecha: "1 Enero de 2023",
  },
];

trabajos.addEventListener("click", (e) => {
  e.preventDefault();
  const trabajoClickeado = e.target.closest(".trabajos__trabajo");
  if (trabajoClickeado) {
    const id = trabajoClickeado.dataset.id;

    const trabajo = datos.filter((dato) => {
      if (dato.id === id) {
        return dato;
      }
    });

    const { titulo, fecha, texto } = trabajo[0];

    ventanaTrabajos.querySelector(".ventana__titulo").innerText = titulo;
    ventanaTrabajos.querySelector(".ventana__fecha").innerText = fecha;
    ventanaTrabajos.querySelector(".ventana__parrafo").innerText = texto;
    ventanaTrabajos.querySelector(".ventana__imagen").src =
      trabajoClickeado.querySelector("img").src;

    ventanaTrabajos.classList.add("ventana--active");
  }
});

ventanaTrabajos
  .querySelector('button[data-action="cerrar-ventana"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    ventanaTrabajos.classList.remove("ventana--active");
  });

ventanaTrabajos
  .querySelector(".ventana__overlay")
  .addEventListener("click", (e) => {
    if(e.target.matches(".ventana__overlay"))
    ventanaTrabajos.classList.remove("ventana--active");
  });
