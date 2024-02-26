"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function addItem() {
  const result = await prisma.todo.create({
    data: {
      name: crypto.randomUUID(),
      isCompleted: false,
    },
  });
  console.log(result);
  revalidatePath("/modal-refresh/parallel-routes");
  return { success: true };
}
