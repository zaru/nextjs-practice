import { TodoList } from "@/app/modal-refresh/client-modal-use-context/components/TodoList";
import { ActionPanel } from "@/app/modal-refresh/client-modal-use-context/components/ActionPanel";

export default function Page() {
  return (
    <div>
      <ActionPanel />
      <TodoList />
    </div>
  );
}
