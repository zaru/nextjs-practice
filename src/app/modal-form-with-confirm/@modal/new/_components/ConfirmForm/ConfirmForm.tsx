"use client";

import { SubmitButton } from "../SubmitButton";
import { FormResultType, submit } from "../../_commands/form";
import { ConfirmField } from "./ConfirmField";
import { EditButton } from "../EditButton";

interface Props {
  result: FormResultType;
  setEdit: (edit: boolean) => void;
}

export function ConfirmForm(props: Props) {
  if (!props?.result?.valid) {
    return null;
  }

  return (
    <form action={submit}>
      <div className="mt-4">
        <ConfirmField
          label="名前"
          name="name"
          defaultValue={props.result.form.name}
        />
      </div>
      <div className="mt-4">
        <ConfirmField
          label="電話"
          name="tel"
          defaultValue={props.result.form.tel}
        />
      </div>
      <div className="mt-4 flex gap-4">
        <EditButton onClick={() => props.setEdit(true)} />
        <SubmitButton>送信する</SubmitButton>
      </div>
    </form>
  );
}
