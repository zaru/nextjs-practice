import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!db) {
    db = await open({
      filename: "./sample.sqlite3",
      driver: sqlite3.Database,
    });
  }

  const { id } = params;
  const { published } = await request.json();
  console.log(`🎃 Request to PUT /api/articles/[${id}]`);

  await db.all(
    `update articles set published = "${published}" where id = ${id}`,
  );

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
