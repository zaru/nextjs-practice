"use server";

import { formSchema } from "../../_schemas/formSchema";
import { redirect } from "next/navigation";
import z from "@/lib/zod";

export type FormResultType = ValidatedType | InvalidType | null;

interface ValidatedType {
  valid: true;
  form: z.infer<typeof formSchema>;
}

interface InvalidType {
  valid: false;
  errors: z.inferFlattenedErrors<typeof formSchema>["fieldErrors"];
}

export async function submit(
  _: FormResultType,
  formData: FormData,
): Promise<FormResultType> {
  const parseData = validate(formData);

  if (parseData.success) {
    return redirect("/modal-form-with-confirm?success=true");
  }

  return {
    valid: false,
    errors: parseData.error.flatten().fieldErrors,
  };
}

function validate(formData: FormData) {
  return formSchema.safeParse(Object.fromEntries(formData.entries()));
}
