import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLocalStorage =
        JSON.parse(localStorage.getItem("pacientes")) || [];
      console.log(
        "Pacientes cargados desde localStorage:",
        pacientesLocalStorage
      );
      if (pacientesLocalStorage.length > 0) {
        setPacientes(pacientesLocalStorage);
      }
    };
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    if (pacientes.length > 0) {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      console.log("Pacientes guardados en localStorage:", pacientes);
    } else {
      // establecer un valor que indique la ausencia de datos
      localStorage.setItem("pacientes", "[]");
    }
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((pac) => pac.id !== id);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
