"use client";

import { useRef } from "react";
import { deleteTask } from "@/app/prisma_crud/server_actions/actions/deleteTask";

export default function DeleteButton({ id }: { id: number }) {
  const ref = useRef<HTMLDialogElement>(null);

  function open() {
    ref.current?.showModal();
  }
  function close() {
    ref.current?.close();
  }

  return (
    <>
      <button className="border p-2 text-sm" onClick={() => open()}>
        delete
      </button>
      <dialog
        ref={ref}
        className="border p-5 backdrop:bg-gray-400 backdrop:bg-opacity-50"
      >
        <p>削除しますか？</p>

        <div className="mt-2 flex items-center justify-end gap-2">
          <button className="border p-2 text-sm" onClick={() => close()}>
            close
          </button>
          <form action={deleteTask}>
            <input type="hidden" name="id" value={id} />
            <button className="border p-2 text-sm">yes</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
