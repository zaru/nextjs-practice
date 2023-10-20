"use server";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function toggle(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return;
  await prisma.todo.update({
    where: { id: todo.id },
    data: { isCompleted: !todo.isCompleted },
  });
  revalidatePath("/pass-credential");
}
