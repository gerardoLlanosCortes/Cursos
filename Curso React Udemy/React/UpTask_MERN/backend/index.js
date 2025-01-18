import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Configurar cors
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      callback(new Error("Error de cors"));
    }
  },
};

app.use(cors(corsOptions));

// Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);

const PORT = process.env.PORT || 4001;

const servidor = app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto ", PORT);
});

// SOCKET IO
import { Server } from "socket.io";

const io = new Server(servidor, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on("connection", (socket) => {
  console.log("Conectado a Socket.io");

  // Definir lo eventos
  socket.on("abrir proyecto", (proyecto) => {
    socket.join(proyecto);
  });

  socket.on("nueva tarea", (tarea) => {
    socket.to(tarea.proyecto).emit("tarea agregada", tarea);
  });

  socket.on("eliminar tarea", (tarea) => {
    socket.to(tarea.proyecto).emit("tarea eliminada", tarea);
  });

  socket.on("actualizar tarea", (tarea) => {
    socket.to(tarea.proyecto._id).emit("tarea actualizada", tarea);
  });

  socket.on("cambiar estado", (tarea) => {
    socket.to(tarea.proyecto._id).emit("nuevo estado", tarea);
  });
});
