"use client";

import { useState } from "react";
import { schema } from "@/app/zod/formSchema";
import { postAction } from "@/app/zod/postAction";

export function Form() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // 失敗は早期に通知しないが、成功は早期に解消する
    const result = schema.safeParse({ email: e.target.value });
    if (result.success) {
      setEmailError("");
    }
  };

  const handleBlurEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    const result = schema.safeParse({ email: e.target.value });
    if (!result.success) {
      const error = result.error.format();
      if (error.email) {
        setEmailError(error.email._errors.join("/"));
      }
    } else {
      setEmailError("");
    }
  };

  async function onSubmit(formData: FormData) {
    const response = await postAction(formData);
    if (!response.success) {
      alert(JSON.stringify(response.message));
    }
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
