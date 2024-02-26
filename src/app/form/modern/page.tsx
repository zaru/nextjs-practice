import { Form } from "@/app/form/modern/components/Form";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div>
      <div>フォーム</div>
      <Form />
    </div>
  );
}
