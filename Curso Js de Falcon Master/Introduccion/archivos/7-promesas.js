//! ayuda a indicar que queremos entregar los datos una vez termina la operación y que quede atento a los datos
const promesa = new Promise((resolve, reject) => {
  // Acción que se ejecutará
  setTimeout(() => {
    const exito = true;

    if (exito) {
      resolve("La operación tuvo exito");
    } else {
      reject("La operación no tuvo exito");
    }
  }, 4000);
});

// exito
promesa.then((mensaje) => {
    console.log(mensaje)
})

// error
promesa.catch((mensaje) => {
    console.log(mensaje);
})
