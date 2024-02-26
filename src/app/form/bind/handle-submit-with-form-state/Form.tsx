"use client";

import { type Result, updateUser } from "./updateUser";
import { useFormState } from "react-dom";

export function Form({ userId }: { userId: string }) {
  const initialState = { success: null };
  const handleSubmit = async (prevState: Result, formData: FormData) => {
    return await updateUser(prevState, { userId: "user-1", formData });
  };
  const [state, dispatch] = useFormState(handleSubmit, initialState);
  return (
    <form action={dispatch}>
      {state.success && <div>Success!</div>}
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  );
}
