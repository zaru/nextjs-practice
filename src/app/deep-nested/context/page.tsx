import List from "@/app/deep-nested/context/components/List";
import SectionHeader from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";

export default function Page() {
  return (
    <Section>
      <SectionHeader>
        ネストが深いコンポーネントの末端にデータを渡す方法 - Contextパターン
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <h2>このパターンの感想</h2>
          <ul>
            <li>
              必要なデータを親で取得し、Context経由で末端のコンポーネントに配る
            </li>
            <li>
              Server Componentの使い勝手を残したまま、バケツリレーしなくて済む
            </li>
            <li>Contextを使うため治安が求められる</li>
          </ul>
        </SectionArticle>
        <List />
      </SectionBody>
    </Section>
  );
}
