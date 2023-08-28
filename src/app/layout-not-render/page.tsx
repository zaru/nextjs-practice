import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Layout not render</p>
      <Link
        href={"/layout-not-render/other"}
        className="text-sky-600"
        prefetch={true}
      >
        他のページへ
      </Link>
    </div>
  );
}
