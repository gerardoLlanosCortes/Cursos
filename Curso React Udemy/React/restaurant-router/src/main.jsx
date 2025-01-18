import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import NuevoMenu, { action as nuevoMenuAction } from "./pages/NuevoMenu";
import Menu, { loader as menuLoader } from "./pages/Menu";
import { action as eliminarPlatoAction } from "./components/Plato";
import EditarPlato, { action as editarPlatoAction, loader as editarPlatoLoader } from "./pages/EditarPlato";


const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Index />,
  },
  {
    path: "/menu",
    element: <Navbar />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/menu/nuevo",
        element: <NuevoMenu />,
        action: nuevoMenuAction,
      },
      {
        path: "/menu/:idPlato/eliminar",
        action: eliminarPlatoAction,
      },
      {
        path: "/menu/:idPlato/editar",
        element: <EditarPlato />,
        loader: editarPlatoLoader,
        action: editarPlatoAction
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
