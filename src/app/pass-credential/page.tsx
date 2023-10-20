import { prisma } from "@/lib/db/prisma";
import Todo from "@/app/pass-credential/components/Todo";

export default async function Page() {
  const todos = await prisma.todo.findMany({
    take: 10,
  });
  return (
    <div>
      <h1>Pass Credential</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} />
      ))}
    </div>
  );
}
