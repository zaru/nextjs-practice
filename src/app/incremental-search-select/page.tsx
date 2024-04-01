"use client";

import { searchAction } from "@/app/incremental-search-select/actions/searchAction";
import { submitAction } from "@/app/incremental-search-select/actions/submitAction";
import { debounce } from "@/app/incremental-search-select/lib/utils";
import { useEffect, useMemo, useState } from "react";
import type { Item } from "@prisma/client";

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest("#incremental-search")) {
          setItems([]);
        }
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const fetchItems = async (keyword: string) => {
    if (!keyword) {
      setItems([]);
      return;
    }

    const { items } = await searchAction(keyword);
    setItems(items);
  };

  const debounceFetchItems = useMemo(() => debounce(fetchItems, 150), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debounceFetchItems(e.target.value);
  };

  const handleSelectItem = (item: Item) => {
    setKeyword(item.name);
    setSelectedItem(item);
    setItems([]);
  };

  const handleBlur = () => {
    if (selectedItem) {
      setKeyword(selectedItem.name);
    } else {
      setKeyword("");
    }
  };

  return (
    <div>
      <form action={submitAction}>
        <div className="relative mt-2 w-96" id="incremental-search">
          <input
            type="text"
            name="search"
            autoComplete={"off"}
            value={keyword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {items.length > 0 && (
            <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item) => {
                return (
                  <li key={item.id} className="relative p-2">
                    <button
                      type="button"
                      onClick={() => handleSelectItem(item)}
                      className="w-full rounded px-4 py-2 text-left text-gray-900 hover:bg-gray-100"
                    >
                      <span className="block truncate font-semibold">
                        {item.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <input type="text" name="comment" placeholder="comment..." />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
