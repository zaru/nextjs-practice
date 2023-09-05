"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTask(data: FormData) {
  const id = data.get("id") as string;
  await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
  revalidatePath("/prisma_crud/server_actions");
}
