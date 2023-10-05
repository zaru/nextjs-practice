import { prisma } from "@/lib/db/prisma";
import Item from "@/app/deep-nested/edge-swr/components/Item";

export default async function List() {
  const todos = await prisma.todo.findMany();
  return (
    <div>
      <div className="flex w-96 flex-col gap-8">
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
