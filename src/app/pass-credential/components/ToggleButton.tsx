"use client";

import { Todo } from "@prisma/client";
import { toggle } from "@/app/pass-credential/toggle_action";
export default function ToggleButton({ todo }: { todo: Todo }) {
  return (
    <div>
      <form action={toggle}>
        <input type="hidden" name="id" value={todo.id} />
        <button
          type="submit"
          onClick={() => {
            console.log("clicked");
          }}
        >
          toggle {todo.id}
        </button>
      </form>
    </div>
  );
}
