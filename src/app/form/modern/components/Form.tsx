"use client";

import { InputText } from "@/app/form/modern/components/InputText";
import { Label } from "@/app/form/modern/components/Label";
import { FormField } from "@/app/form/modern/components/FormField";
import { submitForm } from "@/app/form/modern/actions/submitForm";
import { useFormState } from "react-dom";
import { ErrorMessage } from "@/app/form/modern/components/ErrorMessage";
import { SuccessMessage } from "@/app/form/modern/components/SuccessMessage";
import { DangerMessage } from "@/app/form/modern/components/DangerMessage";

export function Form() {
  const initialState = { success: null, message: null, errors: {} };
  const [state, dispatch] = useFormState(submitForm, initialState);

  return (
    <form action={dispatch} className="mx-auto max-w-sm">
      {state.message && state.success && (
        <SuccessMessage>{state.message}</SuccessMessage>
      )}
      {state.message && !state.success && (
        <DangerMessage>{state.message}</DangerMessage>
      )}
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
        />
        {state?.errors?.text && (
          <ErrorMessage>{state.errors.text}</ErrorMessage>
        )}
      </FormField>

      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-30 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
