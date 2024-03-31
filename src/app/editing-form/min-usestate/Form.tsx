"use client";

import { useState } from "react";

export function Form() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <form>
      <input type="text" name="name" onChange={() => setIsEditing(true)} />
      <fieldset>
        <label>
          <input
            type="radio"
            name="color"
            value="red"
            onChange={() => setIsEditing(true)}
          />
          red
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="blue"
            onChange={() => setIsEditing(true)}
          />
          blue
        </label>
      </fieldset>
      <textarea name="text" onChange={() => setIsEditing(true)}></textarea>

      <button
        type="submit"
        disabled={!isEditing}
        className="bg-sky-700 text-white disabled:opacity-20"
      >
        submit
      </button>
    </form>
  );
}
