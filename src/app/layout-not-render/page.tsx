import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-4">
      <p className="mt-6">
        レイアウト（layout.tsx）は画面遷移時にも再描画されないデモ。スライドアニメーションはレイアウトに存在している。画面遷移をしてもアニメーションは止まらない。
      </p>
      <p className="mt-6">
        <Link
          href={"/layout-not-render/other"}
          className="text-sky-600"
          prefetch={true}
        >
          他のページへ
        </Link>
      </p>
    </div>
  );
}
