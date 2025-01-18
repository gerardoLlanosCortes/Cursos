import Link from "next/link";
import React from "react";


export const metadata = {
    title: "Mi tienda con NextJS - Tienda",
  };
  

export default function layout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li><Link href={"/tienda/categorias"}>Categorias</Link></li>
        </ul>
      </nav>
      
      {children}
    </>
  );
}
