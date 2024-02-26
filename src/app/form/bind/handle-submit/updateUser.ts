"use server";

export interface Result {
  success: boolean | null;
}

export async function updateUser(data: {
  userId: string;
  formData: FormData;
}): Promise<Result> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const name = data.formData.get("name");
  console.log(data, name);
  return { success: true };
}
