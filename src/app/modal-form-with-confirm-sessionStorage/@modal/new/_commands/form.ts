"use server";

import { formSchema } from "@/app/modal-form-with-confirm-sessionStorage/@modal/new/_schemas/formSchema";
import z from "@/lib/zod";
import { redirect } from "next/navigation";

export type FormResultType = ValidatedType | InvalidType | null;

interface ValidatedType {
  valid: true;
  form: z.infer<typeof formSchema>;
}

interface InvalidType {
  valid: false;
  errors: z.inferFlattenedErrors<typeof formSchema>["fieldErrors"];
}

export async function confirm(formData: FormData): Promise<FormResultType> {
  const parseData = validate(formData);

  if (parseData.success) {
    return {
      valid: true,
      form: parseData.data,
    };
  }
  return {
    valid: false,
    errors: parseData.error.flatten().fieldErrors,
  };
}

function validate(formData: FormData) {
  return formSchema.safeParse(Object.fromEntries(formData.entries()));
}
