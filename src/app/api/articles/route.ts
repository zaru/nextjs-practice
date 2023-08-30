import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export async function GET() {
  if (!db) {
    db = await open({
      filename: "./sample.sqlite3",
      driver: sqlite3.Database,
    });
  }

  const articles = await db.all("select * from articles order by id desc");

  return new Response(JSON.stringify(articles), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
