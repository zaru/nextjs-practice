"use client";

import { useRouter } from "next/navigation";
import SectionHeader from "@/app/components/SectionHeader";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Section from "@/app/components/Section";
import { somethingAction } from "@/app/parallel/@modal/actions";

export default function Page() {
  const router = useRouter();

  async function handleSubmit() {
    const result = await somethingAction();
    if (result.success) {
      setTimeout(() => {
        router.back();
      }, 250);
    }
  }
  return (
    <div className="fixed left-0 right-0 top-10 z-10 m-auto w-1/3 border bg-white p-8 shadow">
      <Section>
        <SectionHeader>Modal2</SectionHeader>
        <SectionBody>
          <SectionArticle>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={router.back}
                className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold
                 leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
              >
                Go to back
              </button>
              <form action={handleSubmit}>
                <button
                  className="group flex gap-x-3 rounded-md bg-white p-2 text-sm
                font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50
                hover:text-indigo-600"
                >
                  submit
                </button>
              </form>
            </div>
          </SectionArticle>
        </SectionBody>
      </Section>
    </div>
  );
}
