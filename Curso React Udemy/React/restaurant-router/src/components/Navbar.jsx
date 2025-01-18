import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation()

  return (
    <div className="flex">
      {/* Barra de navegación fija a la izquierda */}
      <nav className="bg-green-600 text-white w-[20%] h-screen p-4 fixed top-0 left-0 shadow-sm shadow-gray-600 flex flex-col gap-8 text-center">
        <div className="mt-3">
          <h1>Aplicación de</h1>
          <span className="text-gray-100 font-bold">Luigi's</span>{" "}
          <span className="text-gray-100 font-bold">Restaurant</span>
        </div>

        <div className="flex flex-col gap-3 font-bold text-left mx-auto">
          <Link to={"/menu"} className={`${location.pathname === "/menu" ? "text-green-900" :""}`}>Menú</Link>
          <Link to={"/menu/nuevo"} className={`${location.pathname === "/menu/nuevo" ? "text-green-900" :""}`}>Agregar al Menú</Link>
        </div>
      </nav>

      {/* Contenido principal que ocupa el resto del espacio */}
      <div className="flex-1 ml-[20%]">
        <Outlet />
      </div>
    </div>
  );
}
