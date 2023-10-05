import List from "@/app/deep-nested/composition/components/List";
import SectionHeader from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";

export default function Page() {
  return (
    <Section>
      <SectionHeader>
        ネストが深いコンポーネントの末端にデータを渡す方法 - Compositionパターン
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <h2>このパターンの感想</h2>
          <ul>
            <li>実質propsバケツリレーと同じ</li>
            <li>
              むしろ原則childrenは一つしか渡せないので複数データを伝搬したいときは不便
            </li>
          </ul>
        </SectionArticle>
        <List />
      </SectionBody>
    </Section>
  );
}
