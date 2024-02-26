"use server";

export interface Result {
  success: boolean | null;
}

export async function updateUser(
  prevState: Result,
  data: { userId: string; formData: FormData },
): Promise<Result> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(prevState, data);
  return { success: true };
}
