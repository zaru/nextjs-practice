"use client";

import Link from "next/link";
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
        <SectionHeader>Modal</SectionHeader>
        <SectionBody>
          <SectionArticle>
            <div className="mt-4">
              <p>通常のLinkページ遷移ではSlotがクリアされない…</p>
              <Link
                href="/parallel"
                className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
              >
                Go to /parallel
              </Link>
            </div>

            <hr />

            <form action={handleSubmit} className="mt-4">
              <p>
                ServerActionsで遷移して、その後router.back()すればSlotがクリアされ、モーダルが閉じる
              </p>
              <button className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600">
                submit
              </button>
            </form>

            <hr />

            <div className="mt-4">
              <p>
                Parallel
                Routesのslotを消したい場合はrouter.back()する必要がある…
              </p>
              <button
                type="button"
                onClick={router.back}
                className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
              >
                Go to back
              </button>
            </div>

            <hr />

            <div className="mt-4">
              <p>
                ネストした2つ目のParallel
                Routesでモーダルを開く。ネストした状態ではParallel
                Routesの挙動が不安定になるので検証。
              </p>
              <Link
                href="/parallel/modal2"
                className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
              >
                Open modal2
              </Link>
            </div>
          </SectionArticle>
        </SectionBody>
      </Section>
    </div>
  );
}
