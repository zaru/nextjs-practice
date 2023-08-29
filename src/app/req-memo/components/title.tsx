import { fetchPost } from "@/app/req-memo/fetchPost";

export default async function Title() {
  const json = await fetchPost("100");
  return (
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {json.title}
    </h1>
  );
}
