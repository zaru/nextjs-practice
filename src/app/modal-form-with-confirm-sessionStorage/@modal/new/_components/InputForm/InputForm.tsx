"use client";

import { CancelButton } from "../CancelButton";
import { SubmitButton } from "../SubmitButton";
import { InputField } from "./InputField";
import { confirm, FormResultType } from "../../_commands/form";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import z from "@/lib/zod";
import { formSchema } from "@/app/modal-form-with-confirm-sessionStorage/@modal/new/_schemas/formSchema";

interface Props {}
export function InputForm(props: Props) {
  const formData = sessionStorage.getItem("formData");
  const form: z.infer<typeof formSchema> = formData ? JSON.parse(formData) : {};

  const handleSubmit = async (_: FormResultType, formData: FormData) => {
    const result = await confirm(formData);
    if (result?.valid) {
      sessionStorage.setItem("formData", JSON.stringify(result.form));
      redirect("/modal-form-with-confirm-sessionStorage/new/confirm");
    }

    return result;
  };

  const [result, dispatch] = useFormState(handleSubmit, null);
  const errors = result?.valid === false ? result.errors : {};

  return (
    <form action={dispatch}>
      <div className="mt-4">
        <InputField
          label="名前"
          name="name"
          defaultValue={form?.name ?? ""}
          errors={errors.name}
        />
      </div>
      <div className="mt-4">
        <InputField
          label="電話番号"
          name="tel"
          defaultValue={form?.tel ?? ""}
          errors={errors.tel}
        />
      </div>
      <div className="mt-4 flex gap-4">
        <CancelButton />
        <SubmitButton>確認する</SubmitButton>
      </div>
    </form>
  );
}
