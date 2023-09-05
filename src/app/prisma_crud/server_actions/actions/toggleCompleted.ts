"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function toggleCompleted(id: number, isCompleted: boolean) {
  // デバッグ目的でここで sleep させる
  await new Promise((resolve) => setTimeout(resolve, 500));

  await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      isCompleted: isCompleted,
    },
  });
  revalidatePath("/prisma_crud/server_actions");
}
