import { useEffect, useState } from "react";
import Filter from "./Filter";
import Header from "./Header";
import ListaChamps from "./ListaChamps";
import Modal from "./Modal";

export default function Home({nombre}) {
  const [champs, setChamps] = useState([]);
  const [champEdit, setChampEdit] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [champsFiltrados, setChampsFiltrados] = useState([]);

  useEffect(() => {
    if (filtro) {
      const nuevoArreglo = champs.filter((champ) => champ.rol === filtro);
      setChampsFiltrados(nuevoArreglo);
    }
  }, [filtro]);

  useEffect(() => {
    if (filtro) {
      const nuevoArreglo = champs.filter((champ) => champ.rol === filtro);
      setChampsFiltrados(nuevoArreglo);
    }
  }, [champs]);

  const eliminarCampeon = (id) => {
    const nuevoArreglo = champs.filter((champ) => champ.id !== id);
    setChamps(nuevoArreglo);
  };

  const editarCampeon = (campeon) => {
    const nuevoArreglo = champs.map((champ) => {
      if (champ.id === campeon.id) {
        return campeon;
      }
      return champ;
    });
    console.log(nuevoArreglo)
    setChamps(nuevoArreglo);
  };

  return (
    <>
      <div className="flex flex-col container mx-auto gap-6">
        <Header champs={champs} nombre={nombre} />
        <Filter filtro={filtro} setFiltro={setFiltro} />
        <ListaChamps
          champs={champs}
          filtro={filtro}
          champsFiltrados={champsFiltrados}
          eliminarCampeon={eliminarCampeon}
          setChampEdit={setChampEdit}
        />

        <button
          className="text-gray-100 bg-lol-gold-4 w-fit px-6 py-4 rounded-full text-3xl font-bold absolute right-10 bottom-10"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
      </div>

      <Modal
        champs={champs}
        setChamps={setChamps}
        showModal={showModal}
        setShowModal={setShowModal}
        champEdit={champEdit}
        setChampEdit={setChampEdit}
        editarCampeon={editarCampeon}
      />
    </>
  );
}
