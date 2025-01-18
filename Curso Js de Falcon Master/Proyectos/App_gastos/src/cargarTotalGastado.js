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

export default cargarTotalGastado;
