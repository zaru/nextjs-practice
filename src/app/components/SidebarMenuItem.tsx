"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@/lib/utils";

type Props = {
  item: {
    href: string;
    title: string;
  };
};

export default function SidebarMenuItem(props: Props) {
  const currentPath = usePathname();
  return (
    <li key={props.item.title}>
      <Link
        href={props.item.href}
        className={classNames(
          props.item.href === currentPath
            ? "bg-gray-50 text-indigo-600"
            : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
        )}
      >
        {props.item.title}
      </Link>
    </li>
  );
}
