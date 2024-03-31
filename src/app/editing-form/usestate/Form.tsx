"use client";

import { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setIsEditing(true);
        }}
      />
      <fieldset>
        <label>
          <input
            type="radio"
            name="color"
            value="red"
            checked={color === "red"}
            onChange={(e) => {
              setColor(e.target.value);
              setIsEditing(true);
            }}
          />
          red
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="blue"
            checked={color === "blue"}
            onChange={(e) => {
              setColor(e.target.value);
              setIsEditing(true);
            }}
          />
          blue
        </label>
      </fieldset>
      <textarea
        name="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setIsEditing(true);
        }}
      ></textarea>
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
