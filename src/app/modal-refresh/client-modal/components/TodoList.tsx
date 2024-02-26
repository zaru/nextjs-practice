import { prisma } from "@/lib/db/prisma";
import { Todo } from "@prisma/client";

export async function TodoList() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
  if (todos.length < 1) return <div>noting...</div>;

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {todos.map((todo: Todo) => (
        <li key={todo.id} className="py-4">
          {todo.name}
        </li>
      ))}
    </ul>
  );
}
