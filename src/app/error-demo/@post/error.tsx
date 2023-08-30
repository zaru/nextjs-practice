"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  // MEMO: reset()するだけでエラーが発生したコンポーネントを再描画してくれるが、ServerComponentの場合はだめ
  // startTransitionしてからrouter.refresh()すると、ServerComponentの場合も再描画してくれる
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            何らかのエラーが発生しました
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{error.message}</p>
            <button
              type="button"
              className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={reload}
            >
              再実行
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
