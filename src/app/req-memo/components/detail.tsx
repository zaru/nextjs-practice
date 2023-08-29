import { fetchPost } from "@/app/req-memo/fetchPost";

export default async function Detail() {
  const json = await fetchPost("100");
  return (
    <div className="max-w-xl">
      <p className="mt-6">{json.content}</p>
    </div>
  );
}
