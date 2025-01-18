import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import { nuevoPlato } from "../data/menu";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  datos.id = Date.now().toString(36);
  datos.precio = Number(datos.precio);

  await nuevoPlato(datos);

  return redirect("/menu");
}

export default function NuevoMenu() {
  const errores = useActionData();

  return (
    <div className="flex justify-center items-center h-screen">
      <Form method="POST" className="bg-white p-10 w-8/12 rounded-md shadow">
        <Formulario />
        <input
          type="submit"
          value="Agregar al Menú"
          className="bg-green-600 text-gray-100 w-full py-3 my-6 text-center cursor-pointer rounded-md"
        />
      </Form>
    </div>
  );
}
