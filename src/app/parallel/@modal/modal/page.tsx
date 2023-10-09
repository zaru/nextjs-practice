"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import SectionHeader from "@/app/components/SectionHeader";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Section from "@/app/components/Section";

export default function Page() {
  const router = useRouter();

  return (
    <div className="fixed left-0 right-0 top-10 z-10 m-auto w-1/3 border bg-white p-8 shadow">
      <Section>
        <SectionHeader>Modal</SectionHeader>
        <SectionBody>
          <SectionArticle>
            <div className="mt-4">
              <p>
                Parallel
                Routesで呼び出したコンテンツは、通常のページ遷移の場合残り続ける仕様。
              </p>
              <p>
                <a href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#navigation">
                  https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#navigation
                </a>
              </p>
              <Link
                href="/parallel"
                className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
              >
                Go to /parallel
              </Link>
            </div>
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
          </SectionArticle>
        </SectionBody>
      </Section>
    </div>
  );
}
