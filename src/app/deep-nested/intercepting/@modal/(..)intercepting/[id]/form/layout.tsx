"use client";

import { useRouter } from "next/navigation";

export default function Layout(props: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start justify-center">
          <div className="relative mt-4 w-full max-w-sm rounded-lg bg-white p-6 text-left shadow-xl">
            <div className="flex items-center justify-between border-b">
              Modal
              <button
                className="px-3 py-2 text-sm hover:bg-gray-100"
                type="button"
                onClick={router.back}
              >
                x
              </button>
            </div>
            <div className="mt-4">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
