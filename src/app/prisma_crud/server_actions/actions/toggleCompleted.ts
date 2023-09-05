"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { ResultType } from "@/app/prisma_crud/server_actions";

export async function toggleCompleted(
  id: number,
  isCompleted: boolean,
): Promise<ResultType> {
  // デバッグ目的でここで sleep させる
  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        isCompleted: isCompleted,
      },
    });
    revalidatePath("/prisma_crud/server_actions");
    return { result: "success" };
  } catch (e) {
    return { result: "fail" };
  }
}
