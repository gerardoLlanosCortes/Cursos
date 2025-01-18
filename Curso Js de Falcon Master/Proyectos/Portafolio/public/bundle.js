'use strict';

const animarTexto = (e) => {
  const cursor = e.querySelector(".hero__cursor");
  cursor.classList.add("hero__cursor--visible");
  const numeroDeLetras = e.dataset.texto.length;

  for (let i = 0; i < numeroDeLetras; i++) {
    setTimeout(() => {
      const letra = document.createElement("span");
      letra.append(e.dataset.texto[i]);
      e.append(letra);
    }, 100 * i);
  }

  setTimeout(() => {
    const cursores = [
      ...e.closest(".hero__header").querySelectorAll(".hero__cursor"),
    ];
    const cursorActual = cursores.indexOf(cursor);
    if(cursorActual < cursores.length -1){
        cursor.classList.remove("hero__cursor--visible");
    } else {
        cursor.classList.add("hero__cursor--active");
        setTimeout(() => {
            cursor.classList.remove("hero__cursor--visible");
        }, 1500);
    }
  }, numeroDeLetras * 100);

  return new Promise((resolve) => {
    setTimeout(resolve, numeroDeLetras * 100);
  });
};

const galeria = document.getElementById("trabajos");

const observer = new IntersectionObserver(
  (entries) => {
    if(entries[0].isIntersecting){
        const trabajos = galeria.querySelectorAll(".trabajos__imagenes a");
        trabajos.forEach((trabajo, index) => {
            setTimeout(() => {
                trabajo.classList.add("trabajos__trabajo--visible");
            }, 200 * index);
        });
    }
  },
  {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

observer.observe(galeria);

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

const slider = document.getElementById("slider");

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e) => {
  clickPresionado = true;

  coordenadaInicial = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
const mueve = (e) => {
  if (!clickPresionado) {
    return;
  }

  const espaciado = e.pageX - slider.offsetLeft;
  const distanciaRecorrida = espaciado - coordenadaInicial;
  slider.scrollLeft = scrollLeft - distanciaRecorrida;
};
const suelta = (e) => {
  clickPresionado = false;
  console.log("suelta");
};

slider.addEventListener("mousedown", presiona);
slider.addEventListener("mousemove", mueve);
slider.addEventListener("mouseup", suelta);

const botonesEmail = document.querySelectorAll(
  '[data-action="abrir-ventana-correo"]'
);

const ventanaCorreo = document.getElementById("ventana-correo");

const botonesCerrar = document.querySelectorAll('[data-action="cerrar-ventana"]');

botonesEmail.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    ventanaCorreo.classList.add("ventana--active");
  });
});


botonesCerrar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      ventanaCorreo.classList.remove("ventana--active");
    });
  });

window.addEventListener("load", async () => {
  await animarTexto(document.querySelector(".hero__titulo--uno"));
  await animarTexto(document.querySelector(".hero__titulo--dos"));

  document.querySelectorAll(".hero__burbuja")[0].classList.add("hero__burbuja--active-1");
  document.querySelectorAll(".hero__burbuja")[1].classList.add("hero__burbuja--active-2");
});
//# sourceMappingURL=bundle.js.map
