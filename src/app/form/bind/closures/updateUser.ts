"use server";

export interface Result {
  success: boolean | null;
}

export async function updateUser(
  userId: string,
  formData: FormData,
): Promise<Result> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(userId, formData);
  return { success: true };
}
