export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("en-US", opciones);
};

export const diasTranscurridos = (fecha) => {
  const fechaDada = new Date(fecha);
  const fechaActual = new Date();

  // Convertir ambas fechas a tiempo UTC (elimina la diferencia horaria)
  const tiempoDado = Date.UTC(
    fechaDada.getFullYear(),
    fechaDada.getMonth(),
    fechaDada.getDate()
  );
  const tiempoActual = Date.UTC(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    fechaActual.getDate()
  );

  // Calcular la diferencia en milisegundos
  const diferencia = tiempoActual - tiempoDado;

  // Convertir la diferencia de milisegundos a días
  const dias = diferencia / (1000 * 3600 * 24);

  return Math.floor(dias); // Devuelve solo la parte entera de los días
};

export const minutosJugados = (totalSegundos) => {
  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;

  const total = `${minutos}:${segundos}`;

  return total;
};
