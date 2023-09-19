import Section from "@/app/components/Section";
import SectionHeader from "@/app/components/SectionHeader";
import SectionBody from "@/app/components/SectionBody";
import SectionArticle from "@/app/components/SectionArticle";
import Form from "@/app/form-handle/use-state/components/Form";

export default function Page() {
  return (
    <Section>
      <SectionHeader>フォーム実装 - useStateパターン</SectionHeader>
      <SectionBody>
        <Form />
        <SectionArticle>
          <h3>概要</h3>
          <ul>
            <li>愚直にuseStateで各種フォームパーツをバインドするパターン</li>
          </ul>
          <h3>デメリット</h3>
          <ul>
            <li>フォーム項目が増えるとuseState対象が増えて煩雑になる</li>
          </ul>
        </SectionArticle>
      </SectionBody>
    </Section>
  );
}
