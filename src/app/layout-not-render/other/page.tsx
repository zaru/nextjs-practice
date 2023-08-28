import Link from "next/link";

export default async function Page() {
  const result = await fetch("http://127.0.0.1:9999/?sleep=2", {
    cache: "no-cache",
  });
  const json = await result.json();
  console.log(json);
  return (
    <div>
      <p>other page</p>
      <Link href={"/layout-not-render"} className="text-sky-600">
        戻る
      </Link>
    </div>
  );
}
