import { NextResponse } from "next/server";

export async function GET() {
  // Extraer parametros
  // Query
  // Comunicarse con otros servicios

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return NextResponse.json(data);
}

export async function POST(request) {
  // Extraer parametros
  // Query
  // Comunicarse con otros servicios
  const data = await request.json();
  console.log(data)

  return NextResponse.json({
    message: "Creando datos",
  });
}

export function PUT() {
  // Extraer parametros
  // Query
  // Comunicarse con otros servicios
  return NextResponse.json({
    message: "Actualizando datos",
  });
}

export function DELETE() {
  // Extraer parametros
  // Query
  // Comunicarse con otros servicios
  return NextResponse.json({
    message: "Eliminando datos",
  });
}
