import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log(`🎃 Request to /api/posts/[${id}]`);
  const random = Math.random();
  const post = {
    id: id,
    title: `title_${random}`,
    content: `content_${random} lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit`,
  };
  return NextResponse.json(post);
}
