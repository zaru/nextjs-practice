"use client";

import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [freeText, setFreeText] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFreeTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFreeText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`name = ${name}, free_text = ${freeText}`);
    reset();
  };

  const reset = () => {
    setName("");
    setFreeText("");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-2">
        <label className="font-bold">name</label>
        <input
          type="text"
          className="rounded border bg-gray-50 p-2"
          value={name}
          onChange={handleNameChange}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label className="font-bold">free text</label>
        <input
          type="text"
          className="rounded border bg-gray-50 p-2"
          value={freeText}
          onChange={handleFreeTextChange}
        />
      </fieldset>
      <div className="mt-4">
        <button
          className="rounded border bg-sky-600 px-4 py-2 text-white"
          type="submit"
        >
          submit
        </button>
      </div>
    </form>
  );
}
