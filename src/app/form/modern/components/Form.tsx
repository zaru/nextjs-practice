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
import { useState } from "react";
import { SubmitButton } from "@/app/form/modern/components/SubmitButton";
import { ResultMessage } from "@/app/form/modern/components/ResultMessage";

export function Form() {
  const initialState = { success: null, message: null };
  const [state, dispatch] = useFormState(submitForm, initialState);
  const [errors, setErrors] = useState<State["errors"]>();

  const updateClientsideErrors = (
    key: keyof NonNullable<State["errors"]>,
    fieldErrors: string[] | undefined,
  ) => {
    if (fieldErrors) {
      setErrors((errors) => {
        return { ...errors, [key]: fieldErrors };
      });
    } else {
      setErrors((errors) => {
        if (errors && errors[key]) {
          const { [key]: _, ...rest } = errors;
          return rest;
        }
        return errors;
      });
    }
  };

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const result = await clientValidation("text", e.target.value);
    updateClientsideErrors("text", result);
  };

  return (
    <form action={dispatch} className="mx-auto max-w-sm">
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
        {errors?.text &&
          errors.text.map((error) => (
            <ErrorMessage key={error}>{error}</ErrorMessage>
          ))}
      </FormField>
      <SubmitButton
        clientSideInvalid={errors && Object.keys(errors).length > 0}
      />
    </form>
  );
}
