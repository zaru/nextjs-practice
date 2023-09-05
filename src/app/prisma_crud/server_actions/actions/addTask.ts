"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { ResultType } from "@/app/prisma_crud/server_actions";

export async function addTask(data: FormData): Promise<ResultType> {
  // デバッグ目的でここで sleep させる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = data.get("name") as string;

  try {
    await prisma.todo.create({
      data: {
        name: name,
      },
    });
    revalidatePath("/prisma_crud/server_actions");
    return { result: "success" };
  } catch (e) {
    return { result: "fail" };
  }
}
