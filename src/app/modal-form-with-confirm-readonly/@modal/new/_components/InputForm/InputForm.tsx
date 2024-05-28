"use client";

import { CancelButton } from "../CancelButton";
import { SubmitButton } from "../SubmitButton";
import { InputField } from "./InputField";
import { FormResultType, submit } from "../../_commands/form";
import { EditButton } from "@/app/modal-form-with-confirm-readonly/@modal/new/_components/EditButton";
import { useEffect, useState } from "react";

interface Props {
  dispatch: (payload: FormData) => void;
  result: FormResultType;
}
export function InputForm(props: Props) {
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    if (props.result?.valid) {
      setEdit(false);
    }
  }, [props.result]);

  const errors = props.result?.valid === false ? props.result.errors : {};
  const formData = props.result?.valid ? props.result.form : null;

  return (
    <form action={edit ? props.dispatch : submit}>
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
