"use client";

import { SearchInput } from "@/app/incremental-search/components/SearchInput";
import { searchAction } from "@/app/incremental-search/actions/searchAction";
import { useFormState } from "react-dom";
import type { SearchState } from "@/app/incremental-search/lib/definitions";

export default function Page() {
  const initialState: SearchState = {
    items: [],
  };

  const [searchState, searchDispatch] = useFormState(
    searchAction,
    initialState,
  );

  return (
    <div>
      <form action={searchDispatch}>
        <div className="w-96">
          <SearchInput />
        </div>
      </form>
      <ul role="list" className="divide-y divide-gray-100">
        {searchState.items.map((item) => (
          <li key={item.id} className="py-4">
            <p className="mt-3 truncate text-sm text-gray-500">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
