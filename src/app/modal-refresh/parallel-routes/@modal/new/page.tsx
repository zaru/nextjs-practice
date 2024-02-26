"use client";

import { useRouter } from "next/navigation";
import { addItem } from "@/app/modal-refresh/parallel-routes/@modal/actions";
import { useContext } from "react";
import { ToasterContext } from "@/app/toaster-context/toaster-provider";

export default function Page() {
  const toast = useContext(ToasterContext);
  const router = useRouter();

  async function handleSubmit() {
    const result = await addItem();
    if (result.success) {
      toast("作成しました");
      router.back();
    }
  }

  return (
    <div className="fixed left-0 right-0 top-10 z-10 m-auto w-fit rounded-lg border bg-white shadow">
      <form action={handleSubmit} className="px-10 py-5">
        <p>新規作成モーダル</p>
        <button
          type="submit"
          className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          作成
        </button>
      </form>
    </div>
  );
}
