import { prisma } from "@/lib/db/prisma";

export default async function Task() {
  const tasks = await prisma.todo.findMany();
  return (
    <div>
      <p>Tasks (revalidatePathの動作確認用)</p>
      <ul className="flex flex-wrap gap-2">
        {tasks.map((task) => (
          <li key={task.id} className="list-none bg-gray-100 p-2">
            <p>{task.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
