import Link from "next/link";

export function ActionPanel() {
  return (
    <div>
      <Link
        href="/modal-refresh/parallel-routes/new"
        className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        新規作成
      </Link>
    </div>
  );
}
