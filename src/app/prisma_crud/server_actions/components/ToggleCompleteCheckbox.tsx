"use client";
import { useTransition } from "react";
import { toggleCompleted } from "@/app/prisma_crud/server_actions/actions/toggleCompleted";

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
      await toggleCompleted(id, event.currentTarget.checked);
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
