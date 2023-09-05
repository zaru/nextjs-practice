"use client";
import {
  completedTodo,
  uncompletedTodo,
} from "@/app/prisma_crud/server_actions/actions";
import { useTransition } from "react";

export default function ToggleCompleteCheckbox({
  id,
  isCompleted,
}: {
  id: number;
  isCompleted: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // startTransition を使うことで ServerActions が終わるまでチェックボックスを disabled にできる
    startTransition(async () => {
      if (event.currentTarget.checked) {
        await completedTodo(id);
      } else {
        await uncompletedTodo(id);
      }
    });
  }

  return (
    <input
      type="checkbox"
      onChange={handleChange}
      checked={isCompleted}
      disabled={isPending}
    />
  );
}
