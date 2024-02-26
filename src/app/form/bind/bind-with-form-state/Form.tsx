"use client";

import { updateUser } from "./updateUser";
import { useFormState } from "react-dom";

export function Form({ userId }: { userId: string }) {
  const updateUserWithId = updateUser.bind(null, userId);
  const initialState = { success: null };
  const [state, dispatch] = useFormState(updateUserWithId, initialState);
  return (
    <form action={dispatch}>
      {state.success && <div>Success!</div>}
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  );
}
