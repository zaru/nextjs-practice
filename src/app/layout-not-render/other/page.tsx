import Link from "next/link";

export default async function Page() {
  const result = await fetch(
    "https://run.mocky.io/v3/2e081f08-0439-47ef-ac83-7f70e6b3a7ca?delay=2",
    {
      cache: "no-cache",
    },
  );
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
