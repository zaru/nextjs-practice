import Title from "@/app/req-memo/components/title";
import Detail from "@/app/req-memo/components/detail";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <p className="mt-6">
          Request
          Memoizationによってfetchは自動でキャッシュしてくれる。fetchはNext.jsとReactで拡張されている。Request
          Memoization自体はReactの機能。ただし、まだ仕様としてFixしていないようでドキュメント化されていない。
        </p>
        <p>
          これを見る限り批判的な意見ほとんど
          https://github.com/facebook/react/issues/25573
        </p>
        <Title />
        <Detail />
      </div>
    </div>
  );
}
