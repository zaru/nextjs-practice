import Title from "@/app/req-memo/components/title";
import Detail from "@/app/req-memo/components/detail";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionBody } from "@/app/components/SectionBody";
import Section from "@/app/components/Section";

export default function Page() {
  return (
    <Section>
      <SectionHeader>fetchリクエストのメモ化デモ</SectionHeader>
      <SectionBody>
        <div className="mt-6 first:mt-0">
          <Title />
          <div className="mt-6 first:mt-0">
            <Detail />
          </div>
        </div>
        <section className="prose prose-slate mt-12">
          <h2>仕様</h2>
          <ul>
            <li>
              件名とコンテンツそれぞれのコンポーネントから同じAPIにfetchしている
            </li>
            <li>APIはリクエストのたびにランダム数値を生成して返す</li>
            <li>
              つまり、件名とコンテンツは同じAPIでも2回叩くため、異なる数値になる
            </li>
            <li>
              しかしRequest Memoizationが効いていれば、
              <strong>キャッシュされるため同じ数値になる</strong>
            </li>
          </ul>
          <h2>Request Memoizationについて</h2>
          <ul>
            <li>
              Request Memoizationによってfetchは自動でキャッシュしてくれる
            </li>
            <li>fetchはNext.jsとReactで拡張されている</li>
            <li>
              Request Memoization自体はReactの機能
              <ul>
                <li>
                  ただし、まだ仕様としてFixしていないようでドキュメント化されていない
                </li>
                <li>これを見る限り批判的な意見ほとんど</li>
                <li>https://github.com/facebook/react/issues/25573</li>
              </ul>
            </li>
          </ul>
          <h2>動作確認方法</h2>
          <pre>npm build && npm run</pre>
          <ul>
            <li>
              キャッシュを利用するため<code>npm run dev</code>ではだめ
            </li>
            <li>
              <code>npm run start</code>してアクセス
            </li>
            <li>
              サーバ側のアクセスログが1回しかリクエストが来ていないことを確認
            </li>
          </ul>
        </section>
      </SectionBody>
    </Section>
  );
}
