"use server";

import z from "@/lib/zod";

export interface State {
  success: boolean | null;
  message: string | null;
  errors?: {
    email?: string[];
    text?: string[];
  };
}

const schema = z.object({
  email: z.string().email(),
  text: z.string().min(1).max(2),
});

export async function submitForm(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // デバッグ目的でここで sleep させる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = schema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "投稿失敗しました",
    };
  }

  return { success: true, message: "投稿成功しました" };
}

type FlattenError = z.inferFlattenedErrors<typeof schema>;
export async function clientValidation(
  key: string,
  value: string,
): Promise<FlattenError | null> {
  const validatedFields = schema.safeParse({ [key]: value });
  return validatedFields.success ? null : validatedFields.error.flatten();
}
