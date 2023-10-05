import { prisma } from "@/lib/db/prisma";

export async function GET(request: Request) {
  const prefectures = await prisma.prefecture.findMany();
  return Response.json({ prefectures });
}
