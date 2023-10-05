import { prisma } from "@/lib/db/prisma";
import Item from "@/app/deep-nested/props/components/Item";
import { PrefecturesType } from "@/app/deep-nested/api";

export default async function List() {
  const todos = await prisma.todo.findMany();
  // 本来は環境変数でURLを生成する必要がある, このケースの場合fetchでなくPrisma直接でも良い
  const result = await fetch("http://localhost:3000/deep-nested/api");
  const { prefectures }: { prefectures: PrefecturesType } = await result.json();
  return (
    <div>
      <div className="flex w-96 flex-col gap-8">
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo} prefectures={prefectures} />
        ))}
      </div>
    </div>
  );
}
