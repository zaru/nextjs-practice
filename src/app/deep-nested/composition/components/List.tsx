import { prisma } from "@/lib/db/prisma";
import Item from "@/app/deep-nested/composition/components/Item";
import PrefectureOptions from "@/app/deep-nested/composition/components/PrefectureOptions";

export default async function List() {
  const todos = await prisma.todo.findMany();
  return (
    <div>
      <div className="flex w-96 flex-col gap-8">
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo}>
            <PrefectureOptions />
          </Item>
        ))}
      </div>
    </div>
  );
}
