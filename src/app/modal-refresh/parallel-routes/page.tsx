import { TodoList } from "@/app/modal-refresh/parallel-routes/components/TodoList";
import { ActionPanel } from "@/app/modal-refresh/parallel-routes/components/ActionPanel";
import Link from "next/link";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default function Page(props: Props) {
  return (
    <div>
      <ActionPanel />
      <TodoList page={Number(props.searchParams.page) || 1} />
      <Link
        href="/modal-refresh/parallel-routes/foo"
        className="border bg-white p-1"
      >
        foo
      </Link>
      <div className="flex gap-2">
        <Link
          href="/modal-refresh/parallel-routes?page=1"
          className="border bg-white p-1"
        >
          1
        </Link>
        <Link
          href="/modal-refresh/parallel-routes?page=2"
          className="border bg-white p-1"
        >
          2
        </Link>
        <Link
          href="/modal-refresh/parallel-routes?page=3"
          className="border bg-white p-1"
        >
          3
        </Link>
      </div>
    </div>
  );
}
