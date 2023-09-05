import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const articles = await prisma.articles.findMany();
  return new Response(JSON.stringify(articles), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
