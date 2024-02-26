"use server";

interface Result {
  success: boolean | null;
}

export async function updateUser(
  userId: string,
  prevState: Result,
  formData: FormData,
): Promise<Result> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(prevState, { userId, formData });
  return { success: true };
}
