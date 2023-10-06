import { Todo } from "@prisma/client";
import Link from "next/link";

type Props = {
  todo: Todo;
};

export default function Item(props: Props) {
  return (
    <div className="flex items-center justify-between rounded bg-sky-50 p-4 shadow">
      <div className="text-xl font-bold">{props.todo.name}</div>
      <Link href={`/deep-nested/intercepting/${props.todo.id}/form`}>
        open modal
      </Link>
    </div>
  );
}
