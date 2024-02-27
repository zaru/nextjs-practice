"use client";

import { useContext } from "react";
import { ToasterContext } from "@/app/toaster-context/toaster-provider";
import { useRouter } from "next/navigation";
import { deleteItem } from "../actions";
import { Todo } from "@prisma/client";

interface Props {
  todo: Todo;
}

export function Form(props: Props) {
  const toast = useContext(ToasterContext);
  const router = useRouter();

  async function handleSubmit() {
    const deleteItemWithId = deleteItem.bind(null, props.todo.id);
    const result = await deleteItemWithId();
    if (result.success) {
      toast("削除しました");
      router.back();
    }
  }

  return (
    <form action={handleSubmit} className="px-10 py-5">
      <p>[ID: {props.todo.id}] 編集モーダル</p>
      <p>{props.todo.name}を削除します</p>
      <button
        type="submit"
        className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        削除
      </button>
    </form>
  );
}
