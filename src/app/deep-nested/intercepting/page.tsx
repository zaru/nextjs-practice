import List from "@/app/deep-nested/intercepting/components/List";
import SectionHeader from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";

export default function Page() {
  return (
    <Section>
      <SectionHeader>
        ネストが深いコンポーネントの末端にデータを渡す方法 -
        Interceptingパターン
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <h2>このパターンの感想</h2>
          <ul>
            <li>
              モーダルのフォームを別ページで用意しInterceptingとParallel
              Routesでモーダル表示
            </li>
            <li>
              本来フォームは独立したページであるという概念にすることで、汎用性と疎結合を実現する
            </li>
            <li>
              深い位置に設置されたコンポーネントを物理的に切り出せるので良い
            </li>
            <li>
              唯一の懸念はInterceptingとParallel
              Routesのルールが癖があるというところ
            </li>
          </ul>
        </SectionArticle>
        <List />
      </SectionBody>
    </Section>
  );
}
