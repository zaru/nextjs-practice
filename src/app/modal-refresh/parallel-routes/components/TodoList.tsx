import { prisma } from "@/lib/db/prisma";
import { Todo } from "@prisma/client";
import Link from "next/link";

interface Props {
  page: number;
}

export async function TodoList(props: Props) {
  const todos = await prisma.todo.findMany({
    orderBy: { id: "desc" },
    take: 5,
    skip: (props.page - 1) * 5,
  });
  if (todos.length < 1) return <div>noting...</div>;

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {todos.map((todo: Todo) => (
        <li key={todo.id} className="py-4">
          {todo.name}
          <Link
            href={`/modal-refresh/parallel-routes/${todo.id}`}
            className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            削除
          </Link>
        </li>
      ))}
    </ul>
  );
}
