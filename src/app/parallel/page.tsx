import Section from "@/app/components/Section";
import SectionHeader from "@/app/components/SectionHeader";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Link from "next/link";
import Task from "@/app/parallel/components/Task";

export default function Page() {
  return (
    <Section>
      <SectionHeader>{Date.now()} Parallel Routesデモ</SectionHeader>
      <SectionBody>
        <Task />
        <SectionArticle>
          <ul>
            <li>他のページコンポーネントを埋め込んだり、モーダル表示できる</li>
            <li>
              ただし若干の癖と不具合なのか仕様なのか分かりにくい部分がある
            </li>
          </ul>
          <h2>モーダルについて</h2>
          <ul>
            <li>
              /paralell/modalといったURLに遷移すると、@modal/modal/page.tsxを今のページのまま描画できる
            </li>
            <li>具体的にはlayout.tsxで定義したmodal slotに入ってくる</li>
            <li>
              モーダルを閉じる方法は主に2つ
              <ul>
                <li>router.back()で前のページに戻る</li>
                <li>Linkやrouter.push()で他のページに遷移する</li>
              </ul>
            </li>
            <li>
              ただし、他のページに遷移する場合slotコンテンツが残り続けるという挙動がある
              <ul>
                <li>
                  catchAllすれば空になるっぽい記述がドキュメントにはあるが、期待の動作にはならない
                </li>
              </ul>
            </li>
            <li>
              ネストしたParallel
              RoutesでrevalidatePathを実行すると、正常に動作しない
              <ul>
                <li>
                  Modalを開いて、そこからさらにModal2を開く = ネストしたParallel
                  Routes遷移
                </li>
                <li>Modal2でServerActionsを実行し、revalidatePathをする</li>
                <li>モーダルを閉じて終了したいが機能しない</li>
              </ul>
            </li>
          </ul>
          <div className="flex gap-2">
            <Link
              href="/parallel/modal"
              className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
            >
              Open Modal
            </Link>
            <Link
              href="/parallel/modal2"
              className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
            >
              Open Modal2
            </Link>
          </div>
        </SectionArticle>
      </SectionBody>
    </Section>
  );
}
