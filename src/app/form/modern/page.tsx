import { Form } from "@/app/form/modern/components/Form";

export const dynamic = "force-dynamic";

export default async function Page() {
  const dummyFetch = async (): Promise<{ name: string }[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    return await res.json();
  };
  return (
    <div>
      <div>フォーム</div>
      {(await dummyFetch()).map((post) => (
        <div key={post.name}>{post.name}</div>
      ))}
      <Form />
    </div>
  );
}
