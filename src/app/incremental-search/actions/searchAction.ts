"use server";

import { prisma } from "@/lib/db/prisma";

export async function searchAction(_prev: any, formData: FormData) {
  const search = formData.get("search") as string;
  if (!search) return { items: [] };

  const items = await prisma.item.findMany({
    where: {
      name: {
        contains: search,
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  return {
    items,
  };
}
