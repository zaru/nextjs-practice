"use client";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import createAction from "@/app/form-handle/use-form-xxx/createAction";
import { FormStateType } from "@/app/form-handle/use-form-xxx";

const initialState: FormStateType = {
  message: null,
  foo: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function Form() {
  const [state, formAction] = useFormState(createAction, initialState);
  return (
    <form action={formAction}>
      <p>{state.message}</p>
      <p>{state.foo}</p>
      <div className="flex flex-col gap-2 border-b border-gray-900/10 pb-12">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <SubmitButton />
      </div>
    </form>
  );
}
