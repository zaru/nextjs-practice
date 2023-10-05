import List from "@/app/deep-nested/edge-fetch/components/List";
import SectionHeader from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";

export default function Page() {
  return (
    <Section>
      <SectionHeader>
        ネストが深いコンポーネントの末端にデータを渡す方法 - 端でfetchパターン
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <h2>このパターンの感想</h2>
          <ul>
            <li>データが必要なコンポーネント自身でfetchする</li>
            <li>複数同一コンポーネントがある場合はN+1でfetchする</li>
            <li>
              Server Component内部でのfetchではないので、とりまとめはされない
            </li>
            <li>
              Route Handlers内部ではキャッシュを効かせられる（用途によるが）
            </li>
            <li>
              Clientでfetchしているので、当然エンドユーザ側にはリクエストは露出している
            </li>
          </ul>
        </SectionArticle>
        <List />
      </SectionBody>
    </Section>
  );
}
