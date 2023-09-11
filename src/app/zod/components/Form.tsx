"use client";

import { useState } from "react";
import { schema } from "@/app/zod/formSchema";
import { postAction } from "@/app/zod/postAction";

export function Form() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleBlurEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    const result = schema.safeParse({ email: e.target.value });
    if (!result.success) {
      setEmailError(result.error.issues[0].message);
    }
  };

  async function onSubmit(formData: FormData) {
    const response = await postAction(formData);
    console.log(response);
  }

  return (
    <form className="flex flex-col gap-4" action={onSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-bold">email</label>
        <div className="flex flex-col gap-1">
          <input
            className="rounded border bg-gray-50 p-2"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlurEmail}
            value={email}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
      </div>
      <div>
        <button
          className="rounded border bg-sky-600 px-4 py-2 text-white"
          type="submit"
        >
          submit
        </button>
      </div>
    </form>
  );
}
