import React from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Loading from "./Loading";

export default function AppClima() {
  const { resultado, cargando, noResultado } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {cargando ? <Loading /> : resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : <p>El clima se va a mostrar aqui</p>}
      </main>
    </>
  );
}
