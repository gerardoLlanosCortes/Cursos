// export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
  return Response.json({ count: 100 });
}

export async function POST() {
  return Response.json({ method: "POSt", count: 100 });
}
