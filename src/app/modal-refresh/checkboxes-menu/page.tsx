import { prisma } from "@/lib/db/prisma";
import { List } from "@/app/modal-refresh/checkboxes-menu/components/List";

export default async function Page() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
  return (
    <div>
      <h1>Todo List</h1>
      <List todos={todos} />
    </div>
  );
}
