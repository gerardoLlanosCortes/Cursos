import React from "react";

export default function Filter({filtro, setFiltro}) {
  return (
    <div className="bg-gray-100 w-full mx-auto p-6 flex items-center justify-center gap-3 rounded">
      <label className="font-bold text-lg" htmlFor="filtro">
        Filtro:
      </label>
      <select
        className="p-2 w-6/12 rounded text-center bg-gray-100 border-2"
        name=""
        id="filtro"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="">-- Seleccionar Rol --</option>
        <option value="top">TopLane</option>
        <option value="jg">Jungla</option>
        <option value="mid">Mid</option>
        <option value="adc">ADC</option>
        <option value="support">Support</option>
      </select>
    </div>
  );
}
