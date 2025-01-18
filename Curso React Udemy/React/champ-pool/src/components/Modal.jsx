import React, { useEffect, useState } from "react";
import { generarId } from "../helpers";

export default function Modal({
  champs,
  setChamps,
  showModal,
  setShowModal,
  champEdit,
  setChampEdit,
  editarCampeon
}) {
  const [campeon, setCampeon] = useState("");
  const [rol, setRol] = useState("");
  const [victorias, setVictorias] = useState("");
  const [derrotas, setDerrotas] = useState("");
  const [asesinatos, setAsesinatos] = useState("");
  const [asistencias, setAsitencias] = useState("");
  const [muertes, setMuertes] = useState("");

  useEffect(() => {
    if (Object.keys(champEdit).length > 0) {
      setCampeon(champEdit.campeon);
      setRol(champEdit.rol);
      setVictorias(champEdit.victorias);
      setDerrotas(champEdit.derrotas);
      setAsesinatos(champEdit.asesinatos);
      setAsitencias(champEdit.asistencias);
      setMuertes(champEdit.muertes);

      setShowModal(true)
    }
  }, [champEdit]);

  const handleAddChamp = (e) => {
    e.preventDefault();

    const champ = {
      campeon,
      rol,
      victorias,
      derrotas,
      asesinatos,
      asistencias,
      muertes,
    };

    if(Object.keys(champEdit).length > 0){
      champ.id = champEdit.id
      editarCampeon(champ)
      setChampEdit({})
    }else{
      champ.id = generarId(),
      setChamps([...champs, champ]);
    }

    setCampeon("");
    setRol("");
    setVictorias("");
    setDerrotas("");
    setAsesinatos("");
    setAsitencias("");
    setMuertes("");

    setShowModal(false);
  };

  const handleCloseModalBtn = () => {
    setShowModal(false)
    setChampEdit({})
    setCampeon("");
    setRol("");
    setVictorias("");
    setDerrotas("");
    setAsesinatos("");
    setAsitencias("");
    setMuertes("");

  }

  return (
    <div
      className={`absolute h-full w-full bg-gray-900 bg-opacity-85 top-0 ${
        !showModal ? "hidden" : ""
      }`}
    >
      <button
        className="text-gray-100 bg-slate-700 w-fit px-4 py-2 rounded-full text-3xl font-bold absolute right-10 top-10"
        onClick={handleCloseModalBtn}
      >
        X
      </button>
      <div className="h-full w-full flex items-center justify-center">
        <div className="bg-gray-100 p-10 w-4/12 rounded flex flex-col gap-6">
          <h1 className="text-center font-bold text-lol-blue-6 text-2xl">
            {!champEdit.campeon ? "Agregar Nuevo Campeón" : "Editar Campeón"}
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleAddChamp}>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold">
                Campeón:
              </label>
              <input
                type="text"
                className="p-1 rounded  focus:outline-lol-gold-4 bg-gray-50 border-2"
                value={campeon}
                onChange={(e) => setCampeon(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Rol:
              </label>
              <select
                name=""
                id=""
                className="p-1 rounded focus:outline-lol-gold-4 bg-gray-50 border-2"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="">-- Seleccionar Rol --</option>
                <option value="top">TopLane</option>
                <option value="jg">Jungla</option>
                <option value="mid">Mid</option>
                <option value="adc">ADC</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Victorias:
              </label>
              <input
                type="number"
                className="p-1 rounded focus:outline-lol-gold-4 bg-gray-50 border-2"
                value={victorias}
                onChange={(e) => setVictorias(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Derrotas:
              </label>
              <input
                type="number"
                className="p-1 rounded focus:outline-lol-gold-4 bg-gray-50 border-2"
                value={derrotas}
                onChange={(e) => setDerrotas(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Asesinatos:
              </label>
              <input
                type="number"
                className="p-1 rounded focus:outline-lol-gold-4 bg-gray-50 border-2"
                value={asesinatos}
                onChange={(e) => setAsesinatos(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Asistencias:
              </label>
              <input
                type="number"
                className="p-1 rounded focus:outline-lol-gold-4 bg-gray-50 border-2"
                value={asistencias}
                onChange={(e) => setAsitencias(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Muertes:
              </label>
              <input
                type="number"
                className="p-1 rounded focus:outline-lol-gold-4 bg-gray-50 border-2"
                value={muertes}
                onChange={(e) => setMuertes(Number(e.target.value))}
              />
            </div>

            <input
              className="bg-lol-blue-6 text-lol-gold-4 font-bold p-3 w-full rounded mt-3 cursor-pointer"
              type="submit"
              value={!champEdit.campeon ? "Agregar Campeón" : "Editar Campeón"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
