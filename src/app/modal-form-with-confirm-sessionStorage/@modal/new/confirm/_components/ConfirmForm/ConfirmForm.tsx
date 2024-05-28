"use client";

import { SubmitButton } from "../SubmitButton";
import { FormResultType, submit } from "../../_commands/form";
import { ConfirmField } from "./ConfirmField";
import { EditButton } from "../EditButton";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import z from "@/lib/zod";
import { formSchema } from "@/app/modal-form-with-confirm-sessionStorage/@modal/new/_schemas/formSchema";

interface Props {}

export function ConfirmForm(props: Props) {
  const router = useRouter();

  const formData = sessionStorage.getItem("formData");
  const form: z.infer<typeof formSchema> = formData ? JSON.parse(formData) : {};

  const [result, dispatch] = useFormState(submit, {
    valid: true,
    form,
  });

  if (!result?.valid) {
    return null;
  }

  return (
    <form action={dispatch}>
      <div className="mt-4">
        <ConfirmField
          label="名前"
          name="name"
          defaultValue={result.form.name}
        />
      </div>
      <div className="mt-4">
        <ConfirmField label="電話" name="tel" defaultValue={result.form.tel} />
      </div>
      <div className="mt-4 flex gap-4">
        <EditButton onClick={() => router.back()} />
        <SubmitButton>送信する</SubmitButton>
      </div>
    </form>
  );
}
