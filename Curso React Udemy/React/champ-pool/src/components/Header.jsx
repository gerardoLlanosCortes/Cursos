import React from "react";
import Icon from "../assets/img/lol-icon.jpg";

export default function Header({ champs, nombre }) {
  const totalPartidas = (campeones) => {
    return campeones.reduce(
      (total, campeon) => campeon.victorias + campeon.derrotas + total,
      0
    );
  };

  const totalVictorias = (campeones) => {
    return campeones.reduce(
      (total, campeon) => campeon.victorias + total,
      0
    );
  };

  const totalDerrotas = (campeones) => {
    return campeones.reduce(
      (total, campeon) => campeon.derrotas + total,
      0
    );
  };

  const winRateTotal = (campeones) => {
    const victorias = totalVictorias(campeones)
    const total = totalPartidas(campeones)
    return ((victorias / total) * 100).toFixed(1)
  };

  const totalAsesinatos = (campeones) => {
    return campeones.reduce(
      (total, campeon) => campeon.asesinatos + total,
      0
    );
  };

  const totalAsistencias = (campeones) => {
    return campeones.reduce(
      (total, campeon) => campeon.asistencias + total,
      0
    );
  };

  const totalMuertes = (campeones) => {
    return campeones.reduce(
      (total, campeon) => campeon.muertes + total,
      0
    );
  };


  const kdaTotal = (campeones) => {
    const asesinatos = totalAsesinatos(campeones)
    const asistencias = totalAsistencias(campeones)
    const muertes = totalMuertes(campeones)
    return ((asesinatos + asistencias) / muertes).toFixed(1)
  };


  return (
    <div className="bg-gray-100 mt-10 w-full mx-auto p-10 px-14 flex justify-between rounded shadow shadow-lol-gold-3">
      <div className="flex flex-col gap-3">
        <h1 className="font-black text-3xl text-center text-lol-blue-6">
          {nombre}
        </h1>
        <img className="h-32 rounded" src={Icon} alt="Icono" />
      </div>
      <div className="flex gap-6">
        <div>
          <h1>Porcentaje</h1>
        </div>
        <div>
          <p className="font-bold">
            Total Partidas:{" "}
            <span className="font-normal">{totalPartidas(champs)}</span>
          </p>
          <p className="font-bold">
            Victorias: <span className="font-normal">{totalVictorias(champs)}</span>
          </p>
          <p className="font-bold">
            Derrotas: <span className="font-normal">{totalDerrotas(champs)}</span>
          </p>
        </div>

        <div>
          <p className="font-bold">
            Asesinatos:{" "}
            <span className="font-normal">{totalAsesinatos(champs)}</span>
          </p>
          <p className="font-bold">
            Asistencias: <span className="font-normal">{totalAsistencias(champs)}</span>
          </p>
          <p className="font-bold">
            Muertes: <span className="font-normal">{totalMuertes(champs)}</span>
          </p>
        </div>

        <div>
          <p className="font-bold">
            Winrate: <span className={`${winRateTotal(champs) < 50 ? "text-red-600 font-black" : "font-normal"}`}>{winRateTotal(champs)}%</span>
          </p>
          <p className="font-bold">
            KDA: <span className={`${kdaTotal(champs) < 1 ? "text-red-600 font-black" : "font-normal"}`}>{kdaTotal(champs)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
