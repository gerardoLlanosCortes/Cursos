import React from "react";
import { useLoaderData } from "react-router-dom";
import { obtenerMenu } from "../data/menu";
import Plato from "../components/Plato";

export function loader() {
  const datos = obtenerMenu();
  return datos;
}

export default function Menu() {
  const menu = useLoaderData();
  // console.log(menu);

  return (
    <div className="flex flex-col gap-6 w-10/12 mx-auto mt-10">
      <h1 className="text-center font-bold text-3xl">Administra Tus Platos</h1>
      <div className="flex flex-col bg-white">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Plato
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Descripción
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Precio
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((plato, id) => (
                    <Plato key={plato.id} plato={plato} id={id}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
