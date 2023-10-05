import { prisma } from "@/lib/db/prisma";
import Item from "@/app/deep-nested/context/components/Item";
import { PrefecturesType } from "@/app/deep-nested/api";
import FormSetupDataProvider from "@/app/deep-nested/context/form-setup-data-provider";

export default async function List() {
  const todos = await prisma.todo.findMany();

  // 本来は環境変数でURLを生成する必要がある
  const result = await fetch("http://localhost:3000/deep-nested/api");
  const { prefectures }: { prefectures: PrefecturesType } = await result.json();
  return (
    <div>
      <div className="flex w-96 flex-col gap-8">
        <FormSetupDataProvider prefectures={prefectures}>
          {todos.map((todo) => (
            <Item key={todo.id} todo={todo} />
          ))}
        </FormSetupDataProvider>
      </div>
    </div>
  );
}
