const formulario = document.forms["formulario-donacion"];

//!Evento submit
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("formulario enviado");
});

//!Evento change
formulario.pais.addEventListener("change", (e) => {
  console.log("el pais cambio");
  console.log("El nuevo valor es:", e.target.value);
});

formulario["cantidad-5"].addEventListener("change", (e) =>
  console.log("La cantidad cambió")
);
formulario["cantidad-10"].addEventListener("change", (e) =>
  console.log("La cantidad cambió")
);

//! Evento focus
formulario.correo.addEventListener("focus", e => {
    console.log("el input correo ahora es el foco de atención");
})

//!Evento blur
formulario.correo.addEventListener("blur", e => {
    console.log("el input correo ya no es el foco de atención");
})

//! Evento key down/up
formulario.correo.addEventListener("keydown", e => {
    console.log("se presionó la tecla", e.key);
})

formulario.correo.addEventListener("keyup", e => {
    console.log("se levantó la tecla", e.key);
})