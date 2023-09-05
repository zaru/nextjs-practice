"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function addTask(data: FormData) {
  // デバッグ目的でここで sleep させる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = data.get("name") as string;
  await prisma.todo.create({
    data: {
      name: name,
    },
  });
  revalidatePath("/prisma_crud/server_actions");
}
