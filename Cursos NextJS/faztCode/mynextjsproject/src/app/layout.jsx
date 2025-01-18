import Navbar from "@/src/components/Navbar";
import { Roboto } from "next/font/google";
import "./global.css"

export const metadata = {
  title: "Mi tienda con NextJS - HomePage",
  description: "Esta es la pagina principale de mi tienda con NextJS",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
