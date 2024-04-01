"use server";

import { prisma } from "@/lib/db/prisma";

export async function searchAction(search: string) {
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
