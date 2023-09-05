import Hello from "@/app/loading-demo/components/hello";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <p className="mt-6 first:mt-0">ローディングデモ</p>
        <p className="mt-6 first:mt-0">
          外部APIをfetchする間にloading.tsxでローディング表示をする
        </p>
        <p className="mt-6 first:mt-0">
          この実装は暗黙的にローディングをしてくれるが、もし明示的にローディングさせたい場合はSuspense
          fallbackを使う。
        </p>
      </div>
      <div className="border-2 bg-gray-100 p-2">
        Output: <Hello />
      </div>
      <div className="mt-4">
        <p className="mt-6 first:mt-0">
          <Link href={"/loading-demo/streaming"} className="text-blue-600">
            Suspenseを使った部分的ローディングデモはこちら
          </Link>
        </p>
      </div>
    </div>
  );
}
