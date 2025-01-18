import mongoose from "mongoose";
import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";
import Usuario from "../models/Usuario.js";

const obtenerProyectos = async (req, res) => {
  //   const id = req.usuario.id;
  //   const proyectos = await Proyecto.find({creador: id})
  const proyectos = await Proyecto.find({
    $or: [
      { colaboradores: { $in: req.usuario } },
      { creador: { $in: req.usuario } },
    ],
  }).select("-tareas");
  res.json(proyectos);
};

const nuevoProyecto = async (req, res) => {
  const proyecto = await Proyecto(req.body);
  proyecto.creador = req.usuario._id;
  console.log(proyecto);

  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerProyecto = async (req, res) => {
  const { id } = req.params;

  // Validar si el ID proporcionado es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "ID de proyecto no válido" });
  }

  // Intentar encontrar el proyecto en la base de datos
  try {
    const proyecto = await Proyecto.findById(id)
      .populate({
        path: "tareas",
        populate: { path: "completado", select: "nombre" },
      })
      .populate("colaboradores", "nombre email");

    if (!proyecto) {
      return res.status(404).json({ msg: "El proyecto no existe" });
    }

    // Verificar si el usuario tiene permisos para acceder al proyecto
    if (
      proyecto.creador.toString() !== req.usuario._id.toString() &&
      !proyecto.colaboradores.some(
        (colaborador) =>
          colaborador._id.toString() === req.usuario._id.toString()
      )
    ) {
      return res.status(401).json({ msg: "Acción no válida" });
    }

    // Si todo está bien, devolver el proyecto
    res.json(proyecto);
  } catch (error) {
    // Manejar errores de base de datos u otros errores
    console.error(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const editarProyecto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "ID de proyecto no válido" });
  }

  const proyecto = await Proyecto.findOne({ _id: id });

  if (!proyecto) {
    const error = new Error("El proyecto no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(401).json({ msg: error.message });
  }

  proyecto.nombre = req.body.nombre || proyecto.nombre;
  proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
  proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;
  proyecto.cliente = req.body.cliente || proyecto.cliente;

  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const eliminarProyecto = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "ID de proyecto no válido" });
  }

  const proyecto = await Proyecto.findOne({ _id: id });

  if (!proyecto) {
    const error = new Error("El proyecto no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(401).json({ msg: error.message });
  }

  try {
    await proyecto.deleteOne();
    res.json({ msg: "Proyecto eliminado Correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const buscarColaborador = async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.findOne({ email }).select(
    "-confirmado -createdAt -password -token -updatedAt -__v"
  );

  if (!usuario) {
    const error = new Error("Usuario no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  res.json(usuario);
};

const agregarColaborador = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "ID de proyecto no válido" });
  }

  const proyecto = await Proyecto.findById(req.params.id);

  if (!proyecto) {
    const error = new Error("Proyecto no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(404).json({ msg: error.message });
  }

  const { email } = req.body;
  const usuario = await Usuario.findOne({ email }).select(
    "-confirmado -createdAt -password -token -updatedAt -__v"
  );

  if (!usuario) {
    const error = new Error("Usuario no encontrado");
    return res.status(404).json({ msg: error.message });
  }

  //El colaborador no es el admin
  if (proyecto.creador.toString() === usuario._id.toString()) {
    const error = new Error("El creador del proyecto no puede ser colaborador");
    return res.status(404).json({ msg: error.message });
  }

  // Revisar que no esté ya agregado
  if (proyecto.colaboradores.includes(usuario._id)) {
    const error = new Error("El usuario ya pertence al proyecto");
    return res.status(404).json({ msg: error.message });
  }

  // Se agrega
  proyecto.colaboradores.push(usuario._id);
  await proyecto.save();

  res.json({ msg: "Colaborador agregado correctamente" });
};

const eliminarColaborador = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "ID de proyecto no válido" });
  }

  const proyecto = await Proyecto.findOne({ _id: id });

  if (!proyecto) {
    const error = new Error("El proyecto no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(401).json({ msg: error.message });
  }

  try {
    // Se elimina
    proyecto.colaboradores.pull(req.body.id);
    await proyecto.save();
    res.json({ msg: "Colaborador eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

// const obtenerTareas = async (req, res) => {
//   const { id } = req.params;

//   const proyecto = await Proyecto.findById(id);

//   if (!proyecto) {
//     const error = new Error("El proyecto no existe");
//     return res.status(404).json({ msg: error.message });
//   }

//   // Hay que se creador o colaborador
//   const tareas = await Tarea.find().where("proyecto").equals(id);

//   res.json(tareas);
// };

export {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  buscarColaborador,
};
