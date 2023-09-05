import TodoList from "@/app/prisma_crud/server_actions/components/todo-list";
import AddForm from "@/app/prisma_crud/server_actions/components/add-form";
import { SearchParams } from "@/app/type";
import { prisma } from "@/lib/db/prisma";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const total = await prisma.todo.count();
  return (
    <main className="m-auto w-96">
      <h1 className="mt-2 text-xl font-bold">ToDo</h1>
      <p>現在登録されているToDoの数: {total}</p>
      <div>
        <AddForm />
      </div>
      <TodoList searchParams={searchParams} />
    </main>
  );
}
