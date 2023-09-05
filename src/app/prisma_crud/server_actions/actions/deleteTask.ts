"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { ResultType } from "@/app/prisma_crud/server_actions";

export async function deleteTask(data: FormData): Promise<ResultType> {
  const id = data.get("id") as string;

  try {
    await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath("/prisma_crud/server_actions");
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}
