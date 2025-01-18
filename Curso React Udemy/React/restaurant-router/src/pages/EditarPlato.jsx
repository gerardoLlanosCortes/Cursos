import React from "react";
import Formulario from "../components/Formulario";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { editarPlato, obtenerPlato } from "../data/menu";

export async function loader({ params }) {
  const plato = await obtenerPlato(params.idPlato);
  return plato;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  await editarPlato(datos, params.idPlato);

  return redirect("/menu");
}

export default function EditarPlato() {
  const plato = useLoaderData();
  console.log(plato);

  return (
    <div className="flex justify-center items-center h-screen">
      <Form method="POST" className="bg-white p-10 w-8/12 rounded-md shadow">
        <Formulario plato={plato} />
        <input
          type="submit"
          value="EDITAR PLATO"
          className="bg-green-600 text-gray-100 w-full py-3 my-6 text-center cursor-pointer rounded-md"
        />
      </Form>
    </div>
  );
}
