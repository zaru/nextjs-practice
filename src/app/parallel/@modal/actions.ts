"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db/prisma";

export async function somethingAction() {
  console.log("something action");

  await prisma.todo.update({
    where: {
      id: 1,
    },
    data: {
      name: new Date().toString(),
    },
  });

  revalidatePath("/parallel");

  return {
    success: true,
  };
}
