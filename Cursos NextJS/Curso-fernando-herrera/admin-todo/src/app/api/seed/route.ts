import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true,
      },
      {
        description: "Piedra del Poder",
      },
      {
        description: "Piedra del Tiempo",
      },
      {
        description: "Piedra del Espacio",
      },
      {
        description: "Piedra de la Realidad",
      },
    ],
  });

  //   const todo = await prisma.todo.create({
  //     data: { description: "Piedra del alma", complete: true },
  //   });

  //   console.log(todo);

  return NextResponse.json({ message: "Seed executed" });
}
