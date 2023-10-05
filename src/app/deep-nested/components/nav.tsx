import Link from "next/link";

export default function Nav() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link
          href="/deep-nested/props"
          className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
        >
          Propsパターン
        </Link>
      </li>
      <li>
        <Link
          href="/deep-nested/composition"
          className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
        >
          Compotisionパターン
        </Link>
      </li>
      <li>
        <Link
          href="/deep-nested/context"
          className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
        >
          Contextパターン
        </Link>
      </li>
      <li>
        <Link
          href="/deep-nested/edge-fetch"
          className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
        >
          末端でfetchパターン
        </Link>
      </li>
      <li>
        <Link
          href="/deep-nested/edge-swr"
          className="group flex gap-x-3 rounded-md bg-white p-2 text-sm font-semibold leading-6 text-gray-700 shadow hover:bg-gray-50 hover:text-indigo-600"
        >
          末端でSWRパターン
        </Link>
      </li>
    </ul>
  );
}
