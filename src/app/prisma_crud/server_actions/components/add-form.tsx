"use client";

import { addTodo } from "@/app/prisma_crud/server_actions/actions";
import { useRef } from "react";
import AddSubmit from "@/app/prisma_crud/server_actions/components/add-submit";

export default function AddForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  async function handleSubmit(data: FormData) {
    await addTodo(data);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="todo">ToDo</label>
      <input ref={inputRef} type="text" name="name" className="border p-1" />
      <AddSubmit />
    </form>
  );
}
