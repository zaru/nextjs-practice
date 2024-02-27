"use server";

import { prisma } from "@/lib/db/prisma";

export async function addItem() {
  const result = await prisma.todo.create({
    data: {
      name: crypto.randomUUID(),
      isCompleted: false,
    },
  });
  console.log(result);
  return { success: true };
}
