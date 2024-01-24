"use client";

import { createAction } from "@/app/prevent-leave-form/createAction";

import { useEffect, useRef } from "react";
import SectionHeader from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import SectionBody from "@/app/components/SectionBody";

// 参照：https://zenn.dev/nino/articles/fafa5053364c03
const useFormGuard = (isDirty: boolean) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        isDirty &&
        event.target instanceof Element &&
        event.target.closest('a:not([target="_blank"])')
      ) {
        if (!window.confirm("ページを離れても良いですか？")) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        return (event.returnValue = "");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("click", handleClick, true);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("click", handleClick, true);
    };
  }, [isDirty]);
};

export default function Page() {
  const ref = useRef<HTMLFormElement>(null);
  useFormGuard(true);

  const handleSubmit = async (formData: FormData) => {
    const result = await createAction(formData);
    console.log(result);

    if (result.ok) {
      ref.current?.reset();
    }
  };

  return (
    <Section>
      <SectionHeader>フォーム離脱防止デモ</SectionHeader>
      <SectionBody>
        <form ref={ref} action={handleSubmit}>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      </SectionBody>
    </Section>
  );
}
