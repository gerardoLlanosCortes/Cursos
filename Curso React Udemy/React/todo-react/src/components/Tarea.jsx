export default function Tarea({ tarea, handleEliminarTarea, setTarea }) {
  return (
    <div className="flex flex-col bg-gray-100 p-4 px-6 gap-4 lg:w-10/12 w-full mx-auto rounded-md shadow-sm shadow-gray-300">
      <h1 className="text-orange-600 font-black text-2xl">{tarea.titulo}</h1>
      <p className="text-lg">{tarea.descripcion}</p>

      <div className="flex flex-col md:flex-row md:justify-between gap-3 ">
        <button
          className="p-3 bg-yellow-500 w-full md:w-3/12 text-gray-100 font-bold rounded-md hover:bg-yellow-600 transition-colors"
          onClick={() => setTarea(tarea)}
        >
          Editar
        </button>
        <button
          className="p-3 bg-red-500 w-full  md:w-3/12 text-gray-100 font-bold rounded-md hover:bg-red-600 transition-colors"
          onClick={() => handleEliminarTarea(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
