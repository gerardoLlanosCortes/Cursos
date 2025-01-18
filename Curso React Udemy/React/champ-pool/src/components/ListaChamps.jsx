import React from "react";
import Champ from "./Champ";

export default function ListaChamps({
  champs,
  filtro,
  champsFiltrados,
  eliminarCampeon,
  setChampEdit,
  setShowModal,
}) {
  return (
    <>
      <div className="bg-gray-100 flex flex-col rounded p-1">
        {filtro ? (
          <>
            {!champsFiltrados.length > 0 && (
              <h2 className="text-center font-bold p-6">
                No hay campeones agregados para este rol
              </h2>
            )}

            {champsFiltrados.map((champ) => (
              <Champ
                key={champ.id}
                champ={champ}
                eliminarCampeon={eliminarCampeon}
                setChampEdit={setChampEdit}
              />
            ))}
          </>
        ) : (
          <>
            {champs.map((champ) => (
              <Champ
                key={champ.id}
                champ={champ}
                eliminarCampeon={eliminarCampeon}
                setChampEdit={setChampEdit}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
