interface Result {
  success: boolean | null;
}

export function Form({ userId }: { userId: string }) {
  async function updateUser(formData: FormData): Promise<Result> {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(userId, formData);
    return { success: true };
  }

  return (
    <form action={updateUser}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  );
}
