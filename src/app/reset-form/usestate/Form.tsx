"use client";

import { useState } from "react";

export function Form() {
  const defaultName = "default name";
  const defaultColor = "red";
  const defaultText = "default text";
  const [name, setName] = useState(defaultName);
  const [color, setColor] = useState(defaultColor);
  const [text, setText] = useState(defaultText);

  const handleReset = () => {
    setName(defaultName);
    setColor(defaultColor);
    setText(defaultText);
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <fieldset>
        <label>
          <input
            type="radio"
            name="color"
            value="red"
            checked={color === "red"}
            onChange={(e) => setColor(e.target.value)}
          />
          red
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="blue"
            checked={color === "blue"}
            onChange={(e) => setColor(e.target.value)}
          />
          blue
        </label>
      </fieldset>
      <textarea
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button type="reset">reset</button>
      <button type="button" onClick={handleReset}>
        reset
      </button>
    </form>
  );
}
