"use client";

import { useEffect, useRef } from "react";
import { debounce } from "@/app/incremental-search-select/lib/utils";

export function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleShortKey = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "k") {
        ref.current?.focus();
      }
    };
    document.addEventListener("keydown", handleShortKey);
    return () => {
      document.removeEventListener("keydown", handleShortKey);
    };
  }, []);

  const debouncedSearch = debounce(async (form: HTMLFormElement) => {
    form.requestSubmit();
  }, 100);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const form = e.currentTarget.form;
    if (!form) return;
    debouncedSearch(form);
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Search
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          🔎
        </div>
        <input
          ref={ref}
          onChange={handleChange}
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="keywords..."
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
