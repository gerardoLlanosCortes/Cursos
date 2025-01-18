import React from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { eliminarPlato } from "../data/menu";


export const action = async  ({params}) => {
  await eliminarPlato(params.idPlato)
  return redirect("/menu")
}

export default function Plato({ plato, id }) {
  const navigate = useNavigate()

  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{id + 1}</td>
      <td className="whitespace-nowrap px-6 py-4">{plato.plato}</td>
      <td className="whitespace-nowrap px-6 py-4">{plato.descripcion}</td>
      <td className="whitespace-nowrap px-6 py-4">{plato.precio}</td>
      <td className="flex p-3 flex-col gap-2 text-gray-50">
        <button className="bg-yellow-500 w-full rounded py-2" onClick={() => navigate(`${plato.id}/editar`)}>Editar</button>
        <Form
          method="POST"
          action={`${plato.id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm(`Deseas eliminar el plato ${plato.plato}?`)) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className="bg-red-600 w-full rounded py-2">
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}
