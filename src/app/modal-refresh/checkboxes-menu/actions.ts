"use server";

import { prisma } from "@/lib/db/prisma";

export const deleteChecked = async (formData: FormData) => {
  const todoIds = formData.getAll("todoId[]");
  console.log(todoIds);
  await prisma.todo.deleteMany({ where: { id: { in: todoIds.map(Number) } } });
  return { success: true };
};
