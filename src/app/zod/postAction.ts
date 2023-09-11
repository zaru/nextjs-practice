"use server";

import { schema } from "@/app/zod/formSchema";

export async function postAction(formData: FormData) {
  const result = schema.safeParse({
    email: formData.get("email"),
  });
  return {
    success: result.success,
  };
}
