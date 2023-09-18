import Link from "next/link";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionBody } from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Section from "@/app/components/Section";

export default async function Page() {
  const result = await fetch(
    "https://run.mocky.io/v3/2e081f08-0439-47ef-ac83-7f70e6b3a7ca?delay=0",
    {
      cache: "no-cache",
    },
  );
  const json = await result.json();
  console.log(json);
  return (
    <Section>
      <SectionHeader>
        レイアウト（layout.tsx）は画面遷移時にも再描画されないデモ
      </SectionHeader>
      <SectionBody>
        <SectionArticle>
          <Link href={"/layout-not-render"}>戻る</Link>
        </SectionArticle>
      </SectionBody>
    </Section>
  );
}
