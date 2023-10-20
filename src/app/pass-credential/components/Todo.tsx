import { prisma } from "@/lib/db/prisma";
import ToggleButton from "@/app/pass-credential/components/ToggleButton";

export default async function Todo({ id }: { id: number }) {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) return <div>Todo not found</div>;

  return (
    <div className="flex gap-2 border p-4">
      <h2>{todo.name}</h2>
      <p>{todo.isCompleted ? "done" : "yet"}</p>
      <ToggleButton todo={todo} />
    </div>
  );
}
