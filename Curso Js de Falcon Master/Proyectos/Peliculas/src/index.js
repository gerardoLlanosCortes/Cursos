import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";
import "./listenerFiltroTipo";
import "./listenerFiltroGeneros";
import "./listenerBuscar";
import "./paginacion";
import "./listenerItems";
import "./listenerPopup";

const cargar = async () => {
  const resultados = await fetchPopulares("movie");
  cargarTitulos(resultados);
  cargarGeneros("movie");
};
cargar();
