import { prisma } from "@/lib/db/prisma";
import DeleteButton from "@/app/prisma_crud/server_actions/components/delete-button";
import ToggleCompleteCheckbox from "@/app/prisma_crud/server_actions/components/toggle-complete-checkbox";
import OrderSwitcher from "@/app/prisma_crud/server_actions/components/order-switcher";
import { SearchParams } from "@/app/type";
import { getOrderBy, getPage } from "@/lib/db/utils";
import Pagination from "@/app/prisma_crud/server_actions/components/pagination";

const TAKE = 5;

export default async function TodoList({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const total = await prisma.todo.count();
  const todos = await prisma.todo.findMany({
    take: TAKE,
    skip: (getPage(searchParams.page) - 1) * TAKE,
    orderBy: {
      id: getOrderBy(searchParams.order),
    },
  });

  // form action={deleteTodo} でも動くけど formAction の動作デモ
  return (
    <div>
      <OrderSwitcher />
      <Pagination
        currentPage={getPage(searchParams.page)}
        maxPage={Math.ceil(total / TAKE)}
        searchParams={searchParams}
      />
      {todos.map((todo) => (
        <div key={todo.id} className="mt-1.5 flex items-center gap-2">
          <ToggleCompleteCheckbox id={todo.id} isCompleted={todo.isCompleted} />
          <div className={todo.isCompleted ? "line-through" : ""}>
            {todo.id}:{todo.name}
          </div>
          <div>
            <DeleteButton id={todo.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
