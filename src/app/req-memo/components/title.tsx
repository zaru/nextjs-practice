import { fetchPost } from "@/app/req-memo/fetchPost";

export default async function Title() {
  const json = await fetchPost("100");
  return (
    <div
      className="rounded-xl border-2 border-sky-500 p-4"
      data-testid="fetch-component"
    >
      fetchで取得したタイトル↓
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {json.title}
      </h1>
    </div>
  );
}
