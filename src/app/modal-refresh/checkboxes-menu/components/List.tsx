"use client";

import { Todo } from "@prisma/client";
import { useState } from "react";
import { DeleteCheckedPanel } from "@/app/modal-refresh/checkboxes-menu/components/DeleteCheckedPanel";

interface Props {
  todos: Todo[];
}

export function List(props: Props) {
  const [checkedLists, setCheckedLists] = useState<Todo[]>([]);

  const handleCheckAll = () => {
    if (checkedLists.length === props.todos.length) {
      setCheckedLists([]);
    } else {
      setCheckedLists(props.todos);
    }
  };

  return (
    <form>
      <div className="flex h-10 items-center justify-between">
        <label className="flex items-center gap-2">
          全部チェック
          <input type="checkbox" onChange={handleCheckAll} />
        </label>
        {checkedLists.length > 0 && (
          <DeleteCheckedPanel setCheckedLists={setCheckedLists} />
        )}
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {props.todos.map((todo) => (
          <li key={todo.id} className="py-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="todoId[]"
                value={todo.id}
                checked={checkedLists.includes(todo)}
                onChange={() => {
                  if (checkedLists.includes(todo)) {
                    setCheckedLists(
                      checkedLists.filter((t) => t.id !== todo.id),
                    );
                  } else {
                    setCheckedLists([...checkedLists, todo]);
                  }
                }}
              />
              {todo.name}
            </label>
          </li>
        ))}
      </ul>
    </form>
  );
}
