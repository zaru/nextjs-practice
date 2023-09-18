import Link from "next/link";
import { SectionHeader } from "@/app/components/SectionHeader";
import Section from "@/app/components/Section";
import { SectionBody } from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";

export default function Page() {
  return (
    <Section>
      <SectionHeader>
        レイアウト（layout.tsx）は画面遷移時にも再描画されないデモ
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <p>
            スライドアニメーションはレイアウトに存在している。画面遷移をしてもアニメーションは止まらない。
          </p>
          <p>
            <Link href={"/layout-not-render/other"} prefetch={true}>
              他のページへ
            </Link>
          </p>
        </SectionArticle>
      </SectionBody>
    </Section>
  );
}
