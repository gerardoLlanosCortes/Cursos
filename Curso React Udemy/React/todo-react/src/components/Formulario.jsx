import { useEffect, useState } from "react";

export default function Formulario({ tareas, setTareas, tarea, setTarea }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleCrearTarea = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      titulo,
      descripcion,
    };

    if (tarea.id) {
      const tareaActualizada = {
        titulo,
        descripcion,
        id: tarea.id,
      };

      const tareasActualizadas = tareas.map((tareaArreglo) => {
        if (tareaArreglo.id === tarea.id) {
          return tareaActualizada;
        }
        return tareaArreglo;
      });
      setTareas(tareasActualizadas);
      setTarea({})
    } else {
      (nuevaTarea.id = Date.now().toString(36)),
        setTareas([...tareas, nuevaTarea]);
    }

    setTitulo("");
    setDescripcion("");
  };

  useEffect(() => {
    if (tarea && Object.entries(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setDescripcion(tarea.descripcion);
    }
  }, [tarea]);

  return (
    <div className="flex flex-col md:w-6/12 mt-10 gap-3">
      <div className="text-center">
        <h2 className="text-gray-100 text-xl">
          Añade Tareas y{" "}
          <span className="text-orange-600 font-bold">Administralas</span>
        </h2>
      </div>
      <form
        className="mt-5 flex flex-col gap-4 bg-gray-100 w-8/12 mx-auto  p-6 py-8 rounded-md shadow-sm shadow-white"
        onSubmit={handleCrearTarea}
      >
        <div className="flex flex-col mx-auto w-full gap-2">
          <label htmlFor="titulo" className="text-slate-900 font-bold ">
            Título:
          </label>
          <input
            id="titulo"
            type="text"
            className="border-2 p-2 focus:outline-orange-600 rounded-md bg-gray-100"
            placeholder="Ingresar título de tarea"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="flex flex-col mx-auto w-full gap-2">
          <label htmlFor="descripcion" className="text-slate-900 font-bold ">
            Descipción:
          </label>
          <input
            id="descripcion"
            type="text"
            className="border-2 p-2 focus:outline-orange-600 rounded-md bg-gray-100"
            placeholder="Ingresar descripción de tarea"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="p-3 bg-orange-600 w-full mx-auto mt-4 rounded-md text-gray-100 uppercase cursor-pointer font-bold hover:bg-orange-700 transition-colors"
          value={"Agregar Tarea"}
        ></input>
      </form>
    </div>
  );
}
