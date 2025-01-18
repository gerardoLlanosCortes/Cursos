import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e58ddc4c058733",
      pass: "5e587c1218c90a",
    },
  });

  //Información email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en UpTask",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
    <p>Tu cuenta está casi lista, solo debes comprobarla en el siguiente enlace: </p>
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e58ddc4c058733",
      pass: "5e587c1218c90a",
    },
  });

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Cambia tu contraseña",
    text: "Cambia tu contraseña en UpTask",
    html: `<p>Hola: ${nombre} Cambia tu contraseña en UpTask</p>
    <p>No pierdas tu acceso, solo haz click en el siguiente enlace: </p>
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Cambiar Contraseña</a>
    <p>Si tu no mandaste esta petición, puedes ignorar el mensaje</p>
    `,
  });
};
