const autenticado = true;

autenticado
  ? console.log("Usuario autenticado")
  : console.log("No autenticado");

!autenticado
  ? console.log("Usuario autenticado")
  : console.log("No autenticado");

// ! Doble ternario

const saldo = 600;
const pagar = 800;
const tarjeta = true;

saldo > pagar 
    ? console.log("Puedes pagar") 
    : tarjeta 
    ? console.log("Puedes Pagar con tarjeta")
    : console.log("No puedes pagar")
