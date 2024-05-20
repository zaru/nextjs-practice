"use client";

import { CancelButton } from "../CancelButton";
import { SubmitButton } from "../SubmitButton";
import { InputField } from "./InputField";
import { FormResultType } from "../../_commands/form";

interface Props {
  dispatch: (payload: FormData) => void;
  result: FormResultType;
}
export function InputForm(props: Props) {
  const errors = props.result?.valid === false ? props.result.errors : {};

  return (
    <form action={props.dispatch}>
      <div className="mt-4">
        <InputField label="名前" name="name" errors={errors.name} />
      </div>
      <div className="mt-4">
        <InputField label="電話番号" name="tel" errors={errors.tel} />
      </div>
      <div className="mt-4 flex gap-4">
        <CancelButton />
        <SubmitButton>確認する</SubmitButton>
      </div>
    </form>
  );
}
