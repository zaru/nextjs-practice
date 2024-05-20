"use client";

import { useFormState } from "react-dom";
import { confirm } from "../_commands/form";
import { ConfirmForm } from "./ConfirmForm/ConfirmForm";
import { InputForm } from "./InputForm/InputForm";

export function Form() {
  const [result, dispatch] = useFormState(confirm, null);
  return (
    <div className="mx-auto max-w-md">
      {result?.valid ? (
        <ConfirmForm result={result} />
      ) : (
        <InputForm result={result} dispatch={dispatch} />
      )}
    </div>
  );
}
