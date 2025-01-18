import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import { obtenerCliente, actualizarcliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);

  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData(); //el request trae un formData
  // console.log(formData.get("nombre")) //1- Forma de obtener los datos del form
  // console.log([...formData]) //2- devuelve un arreglo con arreglos de cada input (nombre y valor)
  //   console.log(Object.fromEntries(formData)); //3- * MEJOR* devuelve un arreglo con el nombre y el valor

  const datos = Object.fromEntries(formData); //Se manda los datos del formData
  const email = formData.get("email");

  //! validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatrios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El email no es válido");
  }

  if (Object.keys(errores).length) {
    return errores;
  }

  //   Actalizar cliente
  await actualizarcliente(params.clienteId, datos);
  return redirect("/");
}

export default function EditarCliente() {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData()

  return (
    <div>
      <h1 className="font-black text-4xl from-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        A continuación podrás modificar los datos de un cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")} //Si se da el valor -1 vuelve a la página anterior
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST">
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Editar Cliente"
          />
        </Form>
      </div>
    </div>
  );
}
