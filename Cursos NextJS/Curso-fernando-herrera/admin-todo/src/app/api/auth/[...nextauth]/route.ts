import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"; // Importa axios o la librería que prefieras
import jwt from "jsonwebtoken";

interface JWTPayload {
  user_id: string;
  email: string;
  username: string;
  exp: number; // Unix timestamp representing token expiry
  // Add other properties as needed
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Realiza el llamado a tu API de Rails para verificar las credenciales
          const response = await axios.post(
            "http://localhost:3001/api/v1/auth/login",
            {
              email: credentials?.email ?? "",
              password: credentials?.password ?? "",
            }
          );

          // Extrae el JWT de la respuesta de la API
          const { token } = response.data;

          // Verifica la firma del JWT
          const decodedToken = jwt.verify(
            token,
            "SECRET_KEY_JWT"
          ) as JWTPayload; // Reemplaza 'tu-secreto' con tu clave secreta

          console.log(decodedToken);

          // Extrae el ID, el correo electrónico y el nombre de usuario del token decodificado
          const userId = decodedToken?.user_id ?? null;
          const email = decodedToken?.email ?? null;
          const username = decodedToken?.username ?? null;

          // Devuelve los datos del usuario
          return Promise.resolve({
            id: userId,
            email: email,
            name: username,
          });
        } catch (error) {
          console.log(error);
          // Si las credenciales son inválidas, devuelve null
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
