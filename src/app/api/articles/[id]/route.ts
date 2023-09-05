import { prisma } from "@/lib/db/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { published } = await request.json();
  console.log(`🎃 Request to PUT /api/articles/[${id}]`, published);

  await prisma.articles.update({
    where: { id: Number(id) },
    data: { published: published !== 0 },
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
