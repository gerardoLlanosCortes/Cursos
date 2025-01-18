import { emailOlvidePassword, emailRegistro } from "../helpers/emails.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";
import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {
  // Evitar registros duplicados
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });

  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    await usuario.save();
    emailRegistro({
      email: usuario.email,
      nombre: usuario.nombre,
      token: usuario.token,
    });
    res.json({
      msg: "Usuario creado Correctamente, Revisa tu email para confirmar tu cuenta",
    });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;
  // Comprobar que el usuario existe
  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    const error = new Error("usuario no existe");
    return res.status(404).json({ error: error.message });
  }

  // Comprobar si el usuario está confirmado
  if (!usuario.confirmado) {
    const error = new Error("usuario no está confirmado");
    return res.status(403).json({ error: error.message });
  }

  // Comprobar password
  if (!(await usuario.comprobarPassword(password))) {
    const error = new Error("el password es incorrecto");
    return res.status(403).json({ error: error.message });
  }

  res.json({
    _id: usuario._id,
    nombre: usuario.nombre,
    email: usuario.email,
    token: generarJWT(usuario._id),
  });
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await Usuario.findOne({ token });

  if (!usuarioConfirmar) {
    const error = new Error("token no váido");
    return res.status(403).json({ error: error.message });
  }

  try {
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.token = "";
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    const error = new Error("Usuario con ese correo no existe");
    return res.status(404).json({ error: error.message });
  }

  try {
    usuario.token = generarId();
    await usuario.save();
    emailOlvidePassword({
      email: usuario.email,
      nombre: usuario.nombre,
      token: usuario.token,
    });
    res.json({ msg: "Hemos enviado un email con las instrucciones" });
    console.log(usuario);
  } catch (error) {
    console.log(error);
  }
};

const comprobarToken = async (req, res) => {
  const { token } = req.params;

  const tokenValido = await Usuario.findOne({ token });

  if (!tokenValido) {
    const error = new Error("el token no es válido");
    return res.status(404).json({ error: error.message });
  }

  res.json({ msg: "Token válido y el usuario existe" });
};

const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const usuario = await Usuario.findOne({ token });

  if (!usuario) {
    const error = new Error("Token no corresponde a ningún usuario");
    return res.status(404).json({ error: error.message });
  }
  usuario.password = password;
  usuario.token = "";

  console.log(usuario);

  try {
    await usuario.save();
    res.json({ msg: "Password modificado Correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const perfil = async (req, res) => {
  const { usuario } = req;
  res.json(usuario);
};

export {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
};
