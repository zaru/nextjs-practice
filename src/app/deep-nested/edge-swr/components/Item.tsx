import { Todo } from "@prisma/client";
import ModalButton from "@/app/deep-nested/edge-swr/components/ModalButton";
import { PrefecturesType } from "@/app/deep-nested/api";

type Props = {
  todo: Todo;
};

export default function Item(props: Props) {
  return (
    <div className="flex items-center justify-between rounded bg-sky-50 p-4 shadow">
      <div className="text-xl font-bold">{props.todo.name}</div>
      <ModalButton />
    </div>
  );
}
