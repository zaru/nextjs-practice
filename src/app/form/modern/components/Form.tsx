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
  const initialState = { success: null, message: null, errors: {} };
  const [state, dispatch] = useFormState(submitForm, initialState);
  const [errors, setErrors] = useState<State["errors"]>(initialState.errors);

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
          onBlur={async (e) => {
            const result = await clientValidation("text", e.target.value);
            if (result?.fieldErrors?.text) {
              setErrors((errors) => ({
                ...errors,
                text: result.fieldErrors.text,
              }));
            } else {
              setErrors((errors) => {
                if (errors?.text) {
                  const { text, ...rest } = errors;
                  return rest;
                }
                return errors;
              });
            }
            console.log(result);
          }}
        />
        {state?.errors?.text && (
          <ErrorMessage>{state.errors.text}</ErrorMessage>
        )}
        {errors?.text && <ErrorMessage>{errors.text}</ErrorMessage>}
      </FormField>
      <SubmitButton
        clientSideInvalid={errors && Object.keys(errors).length > 0}
      />
    </form>
  );
}
