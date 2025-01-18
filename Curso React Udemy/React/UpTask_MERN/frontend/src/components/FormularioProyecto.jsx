import React, { useEffect, useState } from "react";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";
import { useParams } from "react-router-dom";

export default function FormularioProyecto() {
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [cliente, setCliente] = useState("");
  const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos();

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setId(proyecto._id);
      setNombre(proyecto.nombre);
      setDescripcion(proyecto.descripcion);
      setFechaEntrega(proyecto.fechaEntrega?.split("T")[0]);
      setCliente(proyecto.cliente);
    } else {
      console.log("nuevo proyecto");
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente].includes("")) {
      mostrarAlerta({
        msg: "Todos los datos son obligatorios",
        error: true,
      });
      return;
    }

    // Pasar los datos hacia el provider
    await submitProyecto({ id, nombre, descripcion, fechaEntrega, cliente });

    if (!id) {
      setId(null);
      setNombre("");
      setDescripcion("");
      setFechaEntrega("");
      setCliente("");
    }
  };

  return (
    <form
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {alerta.msg && <Alerta alerta={alerta} />}
      <div className="mb-5">
        <label
          htmlFor="nombre"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre Proyecto
        </label>
        <input
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          id="nombre"
          placeholder="Nombre del Proyecto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="descripcion"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Descripcion
        </label>
        <textarea
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          id="descripcion"
          placeholder="Descripcion del Proyecto"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="fecha-entrega"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Fecha Entrega
        </label>
        <input
          type="date"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          id="fecha-entrega"
          value={fechaEntrega}
          onChange={(e) => setFechaEntrega(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="cliente"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre Cliente
        </label>
        <input
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          id="cliente"
          placeholder="Nombre del Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
      </div>

      <input
        type="submit"
        className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors"
        value={id ? `Actualizar Proyecto` : "Crear Proyecto"}
      />
    </form>
  );
}
