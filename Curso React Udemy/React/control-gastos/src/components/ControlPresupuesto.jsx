import React, { useState } from "react";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ControlPresupuesto({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setIsValidPresupuesto
}) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    setGastado(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);

    // calcular porcentaje gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  const HandleResetApp = () => {
    setGastos([])
    setPresupuesto([])
    setIsValidPresupuesto(false)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3b82f6",
            trailColor: "#F5F5F5",
            textColor: porcentaje > 100 ? "#DC2626" : "#3b82f6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={HandleResetApp}>
          Resetear APP
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
}
