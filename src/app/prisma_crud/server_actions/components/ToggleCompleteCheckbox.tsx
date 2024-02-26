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
      if (!result.success) {
        alert("更新に失敗しました");
      }
    });
  }

  return (
    <div className="flex h-5 w-5 items-center">
      {isPending ? (
        <svg
          className="h-5 w-5 animate-spin text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <input
          type="checkbox"
          onChange={handleChange}
          checked={isCompleted}
          disabled={isPending}
        />
      )}
    </div>
  );
}
