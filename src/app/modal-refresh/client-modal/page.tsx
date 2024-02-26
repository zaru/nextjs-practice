import { TodoList } from "@/app/modal-refresh/client-modal/components/TodoList";
import { ActionPanel } from "@/app/modal-refresh/client-modal/components/ActionPanel";

export default function Page() {
  return (
    <div>
      <ActionPanel />
      <TodoList />
    </div>
  );
}
