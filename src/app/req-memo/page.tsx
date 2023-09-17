import Title from "@/app/req-memo/components/title";
import Detail from "@/app/req-memo/components/detail";
import P from "@/app/components/P";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionBody } from "@/app/components/SectionBody";
import Section from "@/app/components/Section";

export default function Page() {
  return (
    <Section>
      <SectionHeader>fetchリクエストのメモ化デモ</SectionHeader>
      <SectionBody>
        <P>
          Request
          Memoizationによってfetchは自動でキャッシュしてくれる。fetchはNext.jsとReactで拡張されている。Request
          Memoization自体はReactの機能。ただし、まだ仕様としてFixしていないようでドキュメント化されていない。
        </P>
        <P>
          これを見る限り批判的な意見ほとんど
          https://github.com/facebook/react/issues/25573
        </P>
        <P>
          動作確認方法: npm build && npm run
          startしてアクセス。サーバ側のアクセスログが1回しかリクエストが来ていないことを確認。
        </P>
        <div className="mt-6 first:mt-0">
          <Title />
          <Detail />
        </div>
      </SectionBody>
    </Section>
  );
}
