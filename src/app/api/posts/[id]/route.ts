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
    title: `タイトル : ランダム数値（${random}）`,
    content: `コンテンツ : ランダム数値（${random}）`,
  };
  return NextResponse.json(post);
}
