const formulario = document.getElementById("formulario");


const validarCantidad = () => {
    // Acepta del 0 al 9 y decimales
  const expresionRegularCantidad = /^\d+(\.\d+)?$/;

  const inputCantidad = formulario.cantidad
  
  if(expresionRegularCantidad.test(inputCantidad.value)){
    inputCantidad.classList.remove("formulario__input--error")
    return true
  }else{
    inputCantidad.classList.add("formulario__input--error")
    return false
  }
};

export default validarCantidad;
