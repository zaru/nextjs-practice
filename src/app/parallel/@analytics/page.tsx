import SectionHeader from "@/app/components/SectionHeader";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Section from "@/app/components/Section";

export default function Page() {
  return (
    <div className="mt-8">
      <Section>
        <SectionHeader>@analytics/page</SectionHeader>
        <SectionBody>
          <SectionArticle>
            <p>ここはParallel Routesで読み込んだコンポーネント</p>
          </SectionArticle>
        </SectionBody>
      </Section>
    </div>
  );
}
