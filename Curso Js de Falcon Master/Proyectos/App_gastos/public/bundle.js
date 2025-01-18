'use strict';

const boton = document.getElementById("toggle-form-gasto");
const formularioGasto = document.getElementById("formulario-gasto");

const abrirFormularioGasto = (modo = "agregarGasto") => {
  boton.classList.add("agregar-gasto__btn--active");
  formularioGasto.classList.add("formulario-gasto--active");

  if (modo === "editarGasto") {
    formularioGasto.querySelector(".formulario-gasto__titulo").innerText =
      "Editar Gasto";
    formularioGasto.querySelector(".formulario-gasto__btn").innerText =
      "Editar Gasto";
    formularioGasto.dataset.modo = "editarGasto";
  } else if (modo === "agregarGasto") {
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    formularioGasto.querySelector(".formulario-gasto__titulo").innerText =
      "Agregar Gasto";
    formularioGasto.querySelector(".formulario-gasto__btn").innerText =
      "Agregar Gasto";
    formularioGasto.dataset.modo = "agregarGasto";
  }
};

const cerrarFormularioGasto = () => {
  boton.classList.remove("agregar-gasto__btn--active");
  formularioGasto.classList.remove("formulario-gasto--active");
};

boton.addEventListener("click", (e) => {
  if ([...formularioGasto.classList].includes("formulario-gasto--active")) {
    cerrarFormularioGasto();
  } else {
    abrirFormularioGasto();
  }
});

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

const contenedorGastos = document.querySelector("#gastos .gastos__lista");
const formatoMoneda$1 = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

const nombresMeses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const cargarGastos = () => {
  const fechaActual = new Date();

  const gastos = JSON.parse(window.localStorage.getItem("gastos"));

  if (gastos && gastos.length > 0) {
    const gastosDelMes = gastos.filter((gasto) => {
      const fecha = new Date(gasto.fecha);
      if (fecha.getMonth() === fechaActual.getMonth()) {
        return gasto;
      }
    });

    document
      .querySelector("#gastos .gastos__mensaje")
      .classList.remove("gastos__mensaje--active");

    contenedorGastos.innerHTML = "";

    gastosDelMes.forEach((gasto) => {
      const fecha = new Date(gasto.fecha);
      const dia = fecha.getDate().toString().padStart(2, "0");
      const mes = nombresMeses[fecha.getMonth()];
      const año = fecha.getFullYear();

      contenedorGastos.innerHTML += `
        <div class="gasto" data-id="${gasto.id}">
            <div class="gasto__info">
                <div>
                    <p class="gasto__nombre">${gasto.descripcion}</p>
                    <p class="gasto__cantidad">${formatoMoneda$1.format(
                      gasto.precio
                    )}</p>
                </div>
                <p class="gasto__fecha">${dia} de ${mes} de ${año}</p>
            </div>
            <div class="gasto__acciones">
                <button class="gasto__btn" data-accion="editar-gasto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                    </svg>
                    <span>Editar</span>
                </button>
                <button class="gasto__btn gasto__btn--rojo" data-accion="eliminar-gasto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                        />
                    </svg>
                    <span>Eliminar</span>
                </button>
            </div>
        </div>
        `;
    });
  } else {
    contenedorGastos.innerHTML = "";

    document
      .querySelector("#gastos .gastos__mensaje")
      .classList.add("gastos__mensaje--active");
  }
};

const formatoMoneda = new Intl.NumberFormat("en-CL", {
    style: "currency",
    currency: "CLP",
  });

const cargarTotalGastado = () => {
  const contenedorTotalGastado = document.getElementById("total-gastado");
  const gastos = JSON.parse(window.localStorage.getItem("gastos"));
  const fechaActual = new Date();
  let total = 0;

  if (gastos) {
    const gastosDelMes = gastos.filter((gasto) => {
      const fecha = new Date(gasto.fecha);
      if (fecha.getMonth() === fechaActual.getMonth()) {
        return gasto;
      }
    });

    if (gastosDelMes) {
      gastosDelMes.forEach((gasto) => {
        total += parseFloat(gasto.precio);
      });
    }

    contenedorTotalGastado.innerText = formatoMoneda.format(total);
  }
};

const formulario = document.querySelector("#formulario-gasto form");
const descripcion = formulario.descripcion;
const precio = formulario.precio;

const expRegDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;
const expRegPrecio = /^\d+(\.\d+)?$/;

const comprobarDescripcion = () => {
  if (!expRegDescripcion.test(descripcion.value)) {
    descripcion.classList.add("formulario-gasto__input--error");
    formulario.descripcion.parentElement
      .querySelector(".formulario-gasto__leyenda")
      .classList.add("formulario-gasto__leyenda--active");

    return false;
  } else {
    descripcion.classList.remove("formulario-gasto__input--error");
    formulario.descripcion.parentElement
      .querySelector(".formulario-gasto__leyenda")
      .classList.remove("formulario-gasto__leyenda--active");

    return true;
  }
};

const comprobarPrecio = () => {
  if (!expRegPrecio.test(precio.value)) {
    precio.classList.add("formulario-gasto__input--error");
    formulario.precio.parentElement
      .querySelector(".formulario-gasto__leyenda")
      .classList.add("formulario-gasto__leyenda--active");

    return false;
  } else {
    precio.classList.remove("formulario-gasto__input--error");
    formulario.precio.parentElement
      .querySelector(".formulario-gasto__leyenda")
      .classList.remove("formulario-gasto__leyenda--active");

    return true;
  }
};

descripcion.addEventListener("blur", (e) => {
  comprobarDescripcion();
});

precio.addEventListener("blur", (e) => {
  comprobarPrecio();
});

descripcion.addEventListener("keyup", (e) => {
  if ([...e.target.classList].includes("formulario-gasto__input--error")) {
    comprobarDescripcion();
  }
});

precio.addEventListener("keyup", (e) => {
  if ([...e.target.classList].includes("formulario-gasto__input--error")) {
    comprobarPrecio();
  }
});

//

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const modo = formulario.closest("#formulario-gasto")?.dataset?.modo;

  if (comprobarDescripcion() && comprobarPrecio()) {
    const gastosGuardados = JSON.parse(window.localStorage.getItem("gastos"));

    const nuevoGasto = {
      id: v4(),
      fecha: new Date(),
      descripcion: descripcion.value,
      precio: precio.value,
    };

    if (modo === "agregarGasto") {
      if (gastosGuardados) {
        const nuevosGastos = [...gastosGuardados, nuevoGasto];
        window.localStorage.setItem("gastos", JSON.stringify(nuevosGastos));
      } else {
        window.localStorage.setItem(
          "gastos",
          JSON.stringify([{ ...nuevoGasto }])
        );
      }
    } else if (modo === "editarGasto") {
      const id = document.getElementById("formulario-gasto").dataset?.id;

      let indexGastoAEditar;
      if (id && gastosGuardados) {
        gastosGuardados.forEach((gasto, index) => {
          if (gasto.id === id) {
            indexGastoAEditar = index;
          }
        });
      }

      const nuevosGastos = [...gastosGuardados];

      nuevosGastos[indexGastoAEditar] = {
        ...gastosGuardados[indexGastoAEditar],
        descripcion: descripcion.value,
        precio: precio.value,
      };

      window.localStorage.setItem("gastos", JSON.stringify(nuevosGastos));
    }

    descripcion.value = "";
    precio.value = "";
    cargarGastos();
    cerrarFormularioGasto();
    cargarTotalGastado();
  }
});

const contenedorGasto = document.getElementById("gastos");

contenedorGasto.addEventListener("click", (e) => {
  const gasto = e.target.closest(".gasto");

  if (gasto) {
    if (gasto.scrollLeft > 0) {
      gasto.querySelector(".gasto__info").scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    } else {
      gasto.querySelector(".gasto__acciones").scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }

  if (e.target.closest('[data-accion="editar-gasto"]')) {
    const id = gasto.dataset.id;

    const gastosGuardados = JSON.parse(window.localStorage.getItem("gastos"));

    let precio = "";
    let descripcion = "";

    if (gastosGuardados && gastosGuardados.length > 0) {
      gastosGuardados.forEach((gasto) => {
        if (gasto.id === id) {
          precio = gasto.precio;
          descripcion = gasto.descripcion;
        }
      });
    }

    document.querySelector("#formulario-gasto #descripcion").value =
      descripcion;
    document.querySelector("#formulario-gasto #precio").value = precio;
    document.querySelector("#formulario-gasto").dataset.id = id;

    abrirFormularioGasto("editarGasto");
  }

  if (e.target.closest('[data-accion="eliminar-gasto"]')) {
    const id = e.target.closest(".gasto").dataset.id;

    const gastosGuardados = JSON.parse(window.localStorage.getItem("gastos"));

    if (gastosGuardados) {
      const nuevosGastos = gastosGuardados.filter((gasto) => {
        if (gasto.id !== id) {
          return gasto;
        }
      });

      window.localStorage.setItem("gastos", JSON.stringify(nuevosGastos));
    }

    cargarGastos();
    cargarTotalGastado();
  }
});

cargarGastos();
cargarTotalGastado();
//# sourceMappingURL=bundle.js.map
