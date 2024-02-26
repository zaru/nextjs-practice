import { Form } from "@/app/form/modern/components/Form";

export const dynamic = "force-dynamic";

export interface User {
  id: number;
  name: string;
  email: string;
}

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store",
  });
  const user: User = await response.json();
  return (
    <div>
      <div>フォーム</div>
      <Form user={user} />
    </div>
  );
}
