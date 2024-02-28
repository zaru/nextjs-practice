import { updateUser } from "./updateUser";

export function Form({ userId }: { userId: string }) {
  return (
    <form action={updateUser}>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  );
}
