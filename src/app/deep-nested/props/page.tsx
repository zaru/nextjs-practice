import List from "@/app/deep-nested/props/components/List";
import SectionHeader from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Nav from "@/app/deep-nested/components/nav";

export default function Page() {
  return (
    <Section>
      <SectionHeader>
        ネストが深いコンポーネントの末端にデータを渡す方法 - propsパターン
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <h2>前提の問題</h2>
          <ul>
            <li>
              Client Componentのは以下はClientになるので、Server
              Componentが使えない
            </li>
            <li>Server Componentが使えないと、データ取得が億劫</li>
            <li>
              ネストが深い構造になってしまったとき、末端のClient
              Componentにデータを渡すのが面倒
            </li>
          </ul>
          <h2>検証ポイント</h2>
          <ul>
            <li>Formコンポーネントが末端</li>
            <li>
              Formコンポーネントの中の都道府県リストに、都道府県のデータを渡したい
            </li>
            <li>どうやって渡すか？</li>
          </ul>

          <h2>このパターンの感想</h2>
          <ul>
            <li>シンプルに必要なデータをpropsでバケツリレーする</li>
            <li>渡すデータが増えると、とにかくしんどい</li>
          </ul>
        </SectionArticle>
        <List />
      </SectionBody>
    </Section>
  );
}
