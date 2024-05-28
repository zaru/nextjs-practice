"use client";

import { CancelButton } from "../CancelButton";
import { SubmitButton } from "../SubmitButton";
import { InputField } from "./InputField";
import { confirm, submit } from "../../_commands/form";
import { EditButton } from "../EditButton";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

interface Props {}
export function InputForm(props: Props) {
  const [result, validate] = useFormState(confirm, null);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    if (result?.valid) {
      setEdit(false);
    }
  }, [result]);

  const errors = result?.valid === false ? result.errors : {};
  const formData = result?.valid ? result.form : null;

  return (
    <form action={edit ? validate : submit}>
      <div className="mt-4">
        <InputField
          label="名前"
          name="name"
          readonly={!edit}
          defaultValue={formData?.name ?? ""}
          errors={errors.name}
        />
      </div>
      <div className="mt-4">
        <InputField
          label="電話番号"
          name="tel"
          readonly={!edit}
          defaultValue={formData?.tel ?? ""}
          errors={errors.tel}
        />
      </div>
      <div className="mt-4 flex gap-4">
        {edit ? <CancelButton /> : <EditButton onClick={() => setEdit(true)} />}
        <SubmitButton>{edit ? "確認する" : "送信する"}</SubmitButton>
      </div>
    </form>
  );
}
