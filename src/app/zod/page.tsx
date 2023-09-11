import { Form } from "@/app/zod/components/Form";

export default function Page() {
  return (
    <div className="max-w-lg text-base leading-7 text-gray-700">
      <div className="mt-4">
        <p className="mt-6 first:mt-0">Zodバリデーションデモ</p>
      </div>
      <div className="mt-4">
        <Form />
      </div>
    </div>
  );
}
