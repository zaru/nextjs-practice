"use client";

export function Form() {
  const defaultName = "default name";
  const defaultText = "default text";

  return (
    <form>
      <input type="text" name="name" defaultValue={defaultName} />
      <fieldset>
        <label>
          <input type="radio" name="color" value="red" defaultChecked={true} />
          red
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="blue"
            defaultChecked={false}
          />
          blue
        </label>
      </fieldset>
      <textarea name="text" defaultValue={defaultText}></textarea>

      <button type="reset">reset</button>
    </form>
  );
}
