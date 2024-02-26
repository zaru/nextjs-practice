"use client";

import { updateUser } from "./updateUser";

export function Form({ userId }: { userId: string }) {
  const handleSubmit = async (formData: FormData) => {
    return await updateUser({ userId, formData });
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  );
}
