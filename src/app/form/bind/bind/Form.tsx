import { updateUser } from "./updateUser";

export function Form({ userId }: { userId: string }) {
  const updateUserWithId = updateUser.bind(null, userId);
  return (
    <form action={updateUserWithId}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  );
}
