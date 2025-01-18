export const nuevoPlato = async (datos) => {
  console.log(datos);
  console.log(import.meta.env.VITE_API_URL);
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const obtenerMenu = async () => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}`);
  const resultado = await respuesta.json();
  return resultado;
};

export const eliminarPlato = async (id) => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: "DELETE",
  });
  return await respuesta.json();
};

export const obtenerPlato = async (id) => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();
  return resultado;
};

export const editarPlato = async (datos, id) => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resultado = await respuesta.json();
  console.log(resultado);
};
