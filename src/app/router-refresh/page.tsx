import Articles from "@/app/router-refresh/components/Articles";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <p className="mt-6">Router Refreshのデモ。</p>
        <p className="mt-6">
          useRouterのrefresh()を使うと、ページ全体を更新せずに差分DOMだけ再描画してくれる。一覧の中の一分アイテムを更新した際に便利。ほぼ無意識でUIを最新にしてくれる。
        </p>
      </div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Articles />
      </Suspense>
    </div>
  );
}
