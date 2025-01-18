import Tarea from "./Tarea";

export default function ListaTareas({ tareas, handleEliminarTarea, setTarea }) {
  return (
    <div className="flex flex-col md:w-6/12 w-8/12 mt-10 gap-3 mx-auto">
      <div className="text-center">
        <h2 className="text-gray-100 text-xl">
          Revisa tus tareas y{" "}
          <span className="text-orange-600 font-bold">Administralas</span>
        </h2>
      </div>

      <div className="mt-5 flex flex-col gap-6 md:h-screen overflow-y-scroll">
        {tareas.map((tarea) => (
          <Tarea key={tarea.id} tarea={tarea} handleEliminarTarea={handleEliminarTarea} setTarea={setTarea}/>
        ))}
      </div>
    </div>
  );
}
