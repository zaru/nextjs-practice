import List from "@/app/deep-nested/edge-swr/components/List";
import SectionHeader from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";

export default function Page() {
  return (
    <Section>
      <SectionHeader>
        ネストが深いコンポーネントの末端にデータを渡す方法 - 端でSWRパターン
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <h2>このパターンの感想</h2>
          <ul>
            <li>データが必要なコンポーネント自身でSWRでfetchする</li>
            <li>SWRが提供するuseSWRフックを使うことで良い感じにfetchできる</li>
            <li>具体的にはN+1にならないようにリクエストを取りまとめてくれる</li>
            <li>
              Clientでfetchしているので、当然エンドユーザ側にはリクエストは露出している
            </li>
            <li>Server Componentの思想に近い</li>
          </ul>
          <h2>関係ない話</h2>
          <ul>
            <li>ReactがCanaryで提供しているuseフック</li>
            <li>https://ja.react.dev/reference/react/use</li>
            <li>Promiseを解決してくれる、汎用的に使える感じのもの</li>
            <li>
              これも使えそうだが、Server
              Componentで作ったPromiseを渡す必要があるので、実質Propsバケツリレーに似ている
            </li>
          </ul>
        </SectionArticle>
        <List />
      </SectionBody>
    </Section>
  );
}
