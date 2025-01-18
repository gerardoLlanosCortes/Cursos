const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
// console.log(ultimaCaja);
ultimaCaja.style.background = "#000";
ultimaCaja.style.color = "#fff";

const cajas = document.querySelectorAll(".caja");
let tamanio = 24;

const incrementarFuente = () => {
  cajas.forEach((caja) => {
    tamanio++;
    caja.style.fontSize = `${tamanio}px`;
  });
};

const disminuirFuente = () => {
    cajas.forEach((caja) => {
      tamanio--;
      caja.style.fontSize = `${tamanio}px`;
    });
  };
  
