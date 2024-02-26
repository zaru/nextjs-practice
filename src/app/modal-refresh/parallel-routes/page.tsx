import { TodoList } from "@/app/modal-refresh/parallel-routes/components/TodoList";
import { ActionPanel } from "@/app/modal-refresh/parallel-routes/components/ActionPanel";

export default function Page() {
  return (
    <div>
      <ActionPanel />
      <TodoList />
    </div>
  );
}
