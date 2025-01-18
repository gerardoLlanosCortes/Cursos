import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

export default function ConfirmarCuenta() {
  const params = useParams();
  const { id } = params;

  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${
          import.meta.env.VITE_BACKEND_URL
        }/usuarios/confirmar/${id}`;
        const { data } = await axios(url);
        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.error,
          error: true,
        });
        setCuentaConfirmada(false)
      }
    };

    confirmarCuenta();
  }, []);

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize text-center text-clamp">
        Confirma tu cuenta y empieza a crear tus{" "}
        <span className="text-slate-700 capitalize">proyectos</span>
      </h1>

      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alerta.msg && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link
            to={"/"}
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >
            Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
}
