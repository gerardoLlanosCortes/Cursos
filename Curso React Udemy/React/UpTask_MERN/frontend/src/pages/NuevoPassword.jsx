import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

export default function NuevoPassword() {
  const params = useParams();
  const { token } = params;
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState(false);

  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [passwordModificado, setPasswordModificado] = useState(false);

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const { data } = await axios(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        setTokenValido(false);
        setAlerta({
          msg: error.response.data.error,
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las Contraseñas no coinciden",
        error: true,
      });
    }

    if (password.length < 6) {
      setAlerta({
        msg: "Las Contraseñas debe tener mínimo 6 carácteres",
        error: true,
      });
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/usuarios/olvide-password/${token}`,
        { password }
      );
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.error,
        error: true,
      });
    }
  };

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize text-center text-clamp">
        Restablece tu Contraseña y No pierdas acceso a tus{" "}
        <span className="text-slate-700 capitalize">proyectos</span>
      </h1>

      {alerta && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form
          className="my-10 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >
              Nuevo Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Nuevo Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password2"
            >
              Repetir Nuevo Password
            </label>
            <input
              id="password2"
              type="password"
              placeholder="Repite Tu Nueva Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Cambiar Contraseña"
            className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"
          />
        </form>
      )}

      {passwordModificado && (
        <Link
          to={"/"}
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          Inicia Sesión
        </Link>
      )}
    </>
  );
}
