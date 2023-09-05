import Link from "next/link";
import { SearchParams } from "@/app/type";

export default function Pagination({
  currentPage,
  maxPage,
  searchParams,
}: {
  currentPage: number;
  maxPage: number;
  searchParams: SearchParams;
}) {
  const restPrams = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (value && typeof value === "string" && key !== "page") {
      restPrams.set(key, value);
    }
  }
  return (
    <div className="mt-2 flex items-center justify-end gap-2">
      {currentPage > 1 && (
        <Link
          href={`/prisma_crud/server_actions?page=${
            currentPage - 1
          }&${restPrams.toString()}`}
          className="border p-1 text-sm"
        >
          &lt; 前
        </Link>
      )}
      {maxPage > currentPage && (
        <Link
          href={`/prisma_crud/server_actions?page=${
            currentPage + 1
          }&${restPrams.toString()}`}
          className="border p-1 text-sm"
        >
          次 &gt;
        </Link>
      )}
    </div>
  );
}
