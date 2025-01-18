import React, { useState } from "react";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";

export default function FormularioColaborador() {
  const [email, setEmail] = useState("");
  const {mostrarAlerta, alerta, submitColaborador} = useProyectos()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === ""){
      mostrarAlerta({
        msg: "El email es obligatorio",
        error: true
      })
      return
    }

    submitColaborador(email)
  };

  return (
    <form
      className="bg-white py-10 px-5 w-full md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {alerta.msg && <Alerta alerta={alerta}/>}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Email Colaborador
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email del Usuario"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value={"Buscar Colaborador"}
        className="bg-sky-600 hover:bg-sky-700 w-full uppercase p-3 text-white font-bold cursor-pointer transition-colors rounded text-sm"
      />
    </form>
  );
}
