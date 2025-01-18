import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  const handleEliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="flex md:flex-row flex-col w-full md:px-10">
        <Formulario tareas={tareas} setTareas={setTareas} tarea={tarea} setTarea={setTarea} />
        <ListaTareas
          tareas={tareas}
          handleEliminarTarea={handleEliminarTarea}
          setTarea={setTarea}
        />
      </div>
    </div>
  );
}

export default App;
