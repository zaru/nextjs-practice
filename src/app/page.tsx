import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="px-6 py-2">
        <li className="list-disc">
          <Link href="/req-memo" className="text-blue-600">
            fetch リクエストメモ化
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/layout-not-render" className="text-blue-600">
            レイアウトの部分更新
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/hierarchy" className="text-blue-600">
            階層
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/error-demo" className="text-blue-600">
            エラーデモ
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/partial-render" className="text-blue-600">
            一覧で部分更新した際に、描画も変更するやつ（HotwireのTurbo
            Streamsみたいなやつ）
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/loading-demo" className="text-blue-600">
            ローディング
          </Link>
          /
          <Link href="/loading-demo/streaming" className="text-blue-600">
            ストリーミング
          </Link>
        </li>
      </ul>
    </main>
  );
}
