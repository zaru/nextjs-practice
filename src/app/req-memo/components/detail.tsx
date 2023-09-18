import { fetchPost } from "@/app/req-memo/fetchPost";

export default async function Detail() {
  const json = await fetchPost("100");
  return (
    <div className="rounded-xl border-2 border-sky-500 p-4">
      fetchで取得したcontent↓
      <p>{json.content}</p>
    </div>
  );
}
