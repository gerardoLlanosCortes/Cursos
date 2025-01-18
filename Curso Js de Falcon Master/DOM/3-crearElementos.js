const agregarCaja = () => {
  // ! creamos el elemento
  const nuevaCaja = document.createElement("div");

  //! Agregamos texto
  nuevaCaja.innerHTML = "Nueva Caja";
  //   nuevaCaja.setAttribute("id", "nuevo-id");
  nuevaCaja.setAttribute("class", "caja activa");

  //! Agregamos el elemento al DOM
  const contenedor = document.getElementById("contenedor1");

  //! formas de agregarlo:
  //* 1- AppendChild -> lo agrega al final
  //   contenedor.appendChild(nuevaCaja);

  //* 2 - insertAdjacentElement (afterBegin (primer elemento) - beforeBegin (antes del padre) - beforeEnd (ultimo elemento) - afterEnd (despues del padre))
  contenedor.insertAdjacentElement("afterbegin", nuevaCaja);

  //* ReplaceWith -> reemplazar un elemento con otro
  document.querySelector("#contenedor1 .caja").replaceWith(nuevaCaja)
};
