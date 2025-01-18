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

export { cerrarFormularioGasto, abrirFormularioGasto };
