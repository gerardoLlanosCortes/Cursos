import React, { useState } from "react";
import { generarId } from "../helpers"; 

export default function Login({setUsuario, setNombre}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("Iniciando sesión")

    if([user, pass].includes("")){
      console.log("Faltan datos")
      return
    }

    const usuario = {
      user,
      pass,
      id: generarId()
    }

    setUsuario(usuario)
    setNombre(usuario.user)

  }

  return (
    <>
      <form className="bg-gray-100 w-6/12 p-12 rounded flex flex-col gap-6 shadow-md shadow-lol-gold-3" onSubmit={handleLogin}>
        <h1 className="font-bold text-2xl text-lol-blue-6 text-center">
          Inciar Sesión
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="text-lol-gold-4 font-bold" htmlFor="">
              Usuario
            </label>
            <input
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded bg-gray-50 focus:outline-lol-gold-4"
              type="text"
              placeholder="Ingresar Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lol-gold-4 font-bold" htmlFor="">
              Contraseña
            </label>
            <input
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded bg-gray-50 focus:outline-lol-gold-4"
              type="password"
              placeholder="Ingresar Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <input
            className="bg-lol-blue-6 text-lol-gold-4 font-bold p-3 w-full rounded mt-6 cursor-pointer"
            type="submit"
            value="Ingresar"
          />
        </div>
      </form>
    </>
  );
}
