import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-8/12 flex flex-col gap-4 mx-auto justify-center items-center">
        <h1 className="text-3xl text-gray-800 font-black">
          Bienvenido al Sistema de{" "}
          <span className="text-green-600">Luigi's</span>{" "}
          <span className="text-red-600">Restaurant</span>
        </h1>
        <Link to={"/menu"} className="bg-green-600 w-4/12 py-3 text-center rounded-md text-gray-100 hover:bg-green-700 transition-colors">
          Ingresar
        </Link>
      </div>
    </div>
  );
}
