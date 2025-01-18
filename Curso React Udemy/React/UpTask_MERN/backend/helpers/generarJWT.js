import jwt from "jsonwebtoken";

const generarJWT = (id) => {
  return jwt.sign({ id, nombre, email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generarJWT;
