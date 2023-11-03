import Section from "@/app/components/Section";
import SectionHeader from "@/app/components/SectionHeader";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Link from "next/link";

export default function Page() {
  return (
    <Section>
      <SectionHeader>{Date.now()} Parallel Routesデモ</SectionHeader>
      <SectionBody>
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
            </li>
            <li>
              slotを空にするには@modal/page.tsxでnullを返すようにすると期待の動作になる
              <ul>
                <li>
                  ただし、npm run devの場合、初回アクセスだと正常にParallel
                  Routesが起動せず、2回目以降のアクセスで機能する
                </li>
                <li>production buildでは問題ない</li>
              </ul>
            </li>
            <li>
              ネストしたParallel Routesを開いて全部戻った後、なぜか再度Parallel
              Routesには遷移できない状態…なぜ
            </li>
          </ul>
          <Link href="/parallel/modal">Modal</Link>
        </SectionArticle>
      </SectionBody>
    </Section>
  );
}
