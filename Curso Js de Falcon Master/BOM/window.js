console.log(window);
console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);
console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto`);

let ventana;
const abrirVentana = () => {
  ventana = window.open("", "Mi nueva ventana", "width=500,height=500");
  ventana.document.write("<h1>Hola escribiendo en la nueva ventana</h1>")
};

const cerrarVentana = () => {
    window.close(ventana)
    // ventana.close()
}

