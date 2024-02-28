"use client";

import { InputText } from "@/app/form/modern/components/InputText";
import { Label } from "@/app/form/modern/components/Label";
import { FormField } from "@/app/form/modern/components/FormField";
import {
  clientValidation,
  State,
  submitForm,
} from "@/app/form/modern/actions/submitForm";
import { useFormState } from "react-dom";
import { ErrorMessage } from "@/app/form/modern/components/ErrorMessage";
import { useRef, useState } from "react";
import { SubmitButton } from "@/app/form/modern/components/SubmitButton";
import { ResultMessage } from "@/app/form/modern/components/ResultMessage";

export function Form() {
  // Submit後にフォームの入力内容をクリアするために利用（リダイレクトするなら不要）
  // Refを使う以外にkeyで強制的に再レンダリングさせる方法もあるが、破壊的すぎるのが気に入らない
  const formRef = useRef<HTMLFormElement>(null);

  // useFormStateでServer Actionsをラップし、返り値をState管理する（エラーメッセージなど）
  const initialState = { success: null, message: null };
  const handleSubmit = async (prevState: State, formData: FormData) => {
    const result = await submitForm(prevState, formData);
    if (result.success) {
      formRef.current?.reset();
    }
    return result;
  };
  const [state, dispatch] = useFormState(handleSubmit, initialState);

  // クライアントでリアルタイムバリデーションを実行するためのステート（オプション）
  const [errors, setErrors] = useState<State["errors"]>();

  // クライアントでのエラーメッセージを更新する関数
  const updateClientsideErrors = (
    key: keyof NonNullable<State["errors"]>,
    fieldErrors: string[] | undefined,
  ) => {
    setErrors((errors) => {
      return { ...errors, [key]: fieldErrors };
    });
  };
  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const result = await clientValidation("text", e.target.value);
    updateClientsideErrors("text", result);
  };

  return (
    <form action={dispatch} className="mx-auto max-w-sm" ref={formRef}>
      <ResultMessage message={state.message} success={state.success} />
      <FormField>
        <Label htmlFor="email">Your email</Label>
        <InputText
          type="email"
          id="email"
          name="email"
          placeholder="name@flowbite.com"
          required
        />
        {state?.errors?.email && (
          <ErrorMessage>{state.errors.email}</ErrorMessage>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="text">Content</Label>
        <InputText
          type="text"
          id="text"
          name="text"
          placeholder="some text here..."
          required
          onBlur={handleBlur}
        />
        {state?.errors?.text &&
          state.errors.text.map((error) => (
            <ErrorMessage key={error}>{error}</ErrorMessage>
          ))}
        {/* サーバ側のエラーメッセージとクライアント側のエラーメッセージを共通化するのは構造上難しい… */}
        {errors?.text &&
          errors.text.map((error) => (
            <ErrorMessage key={error}>{error}</ErrorMessage>
          ))}
      </FormField>
      <SubmitButton
        clientSideInvalid={
          errors && Object.values(errors).some((value) => value !== undefined)
        }
      />
    </form>
  );
}
