"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(data: FormData) {
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

export async function deleteTodo(data: FormData) {
  const id = data.get("id") as string;
  await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
  revalidatePath("/prisma_crud/server_actions");
}

export async function completedTodo(id: number) {
  // デバッグ目的でここで sleep させる
  await new Promise((resolve) => setTimeout(resolve, 500));

  await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      isCompleted: true,
    },
  });
  revalidatePath("/prisma_crud/server_actions");
}
export async function uncompletedTodo(id: number) {
  // デバッグ目的でここで sleep させる
  await new Promise((resolve) => setTimeout(resolve, 500));

  await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      isCompleted: false,
    },
  });
  revalidatePath("/prisma_crud/server_actions");
}
