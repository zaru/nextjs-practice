import { NextResponse } from "next/server";

export async function GET() {
  console.log("🎃 Request to /api/posts");
  const posts = [];
  for (let i = 1; i <= 10; i++) {
    const random = Math.random();
    posts.push({
      id: i,
      title: `title_${random}`,
      content: `content_${random} lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit`,
    });
  }
  return NextResponse.json(posts);
}
