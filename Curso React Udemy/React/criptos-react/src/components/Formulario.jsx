import React, { useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

export default function Formulario({setMonedas}) {
    
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  //  Uso del HOOK
  const [moneda, SelectMonedas] = useSelectMonedas("Elije tu moneda", monedas);
  const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas(
    "Elije tu CriptoMoneda",
    criptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });

      setCriptos(arrayCriptos);
    };
    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }

    setMonedas({
        moneda, criptomoneda
    })

    setError(false);
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form action="" onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
}
