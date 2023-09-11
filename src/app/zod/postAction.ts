"use server";

import { schema } from "@/app/zod/formSchema";

export async function postAction(formData: FormData) {
  const result = schema.safeParse(Object.fromEntries(formData));
  return {
    success: result.success,
    message: result.success ? "OK" : result.error?.format(),
  };
}
