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
      const result = await toggleCompleted(id, event.currentTarget.checked);
      if (result.result === "success") {
        alert("更新しました");
      } else {
        alert("更新に失敗しました");
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
