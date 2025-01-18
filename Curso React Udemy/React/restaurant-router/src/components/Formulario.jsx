import React from "react";

export default function Formulario({ plato }) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center font-bold text-2xl mt-6">
        {plato?.id ? "Editar Plato" : "Agregar Plato"}
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-gray-800" htmlFor="nombre">
            Plato:
          </label>
          <input
            name="plato"
            id="plato"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
            placeholder="Nombre del plato"
            defaultValue={plato?.plato}
          />
        </div>
        <div>
          <label className="text-gray-800" htmlFor="nombre">
            Descripción:
          </label>
          <input
            name="descripcion"
            id="descripcion"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
            placeholder="Descripción del plato"
            defaultValue={plato?.descripcion}
          />
        </div>
        <div>
          <label className="text-gray-800" htmlFor="nombre">
            Precio:
          </label>
          <input
            name="precio"
            id="precio"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
            placeholder="Precio del plato"
            defaultValue={plato?.precio}
          />
        </div>
      </div>
    </div>
  );
}
