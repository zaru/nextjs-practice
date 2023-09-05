import Hero from "@/app/loading-demo/streaming/components/hero";
import Heavy from "@/app/loading-demo/streaming/components/heavy";
import { Suspense } from "react";
import Skeleton from "@/app/loading-demo/streaming/components/skeleton";

export default function Page() {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <p className="mt-6 first:mt-0">
          部分的（ストリーミング）ローディングデモ
        </p>
      </div>
      <div className="border-2 bg-gray-100 p-2">
        <p>処理が普通のコンポーネント（1秒未満）</p>
        <Suspense fallback={<Skeleton />}>
          <Hero />
        </Suspense>
      </div>
      <div className="border-2 bg-gray-100 p-2">
        <p>処理が遅いコンポーネント（約4秒かかる）</p>
        <Suspense fallback={<Skeleton />}>
          <Heavy />
        </Suspense>
      </div>
    </div>
  );
}
