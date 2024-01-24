"use server";

export async function createAction(formData: FormData) {
  const name = formData.get("name");
  return { name, ok: true };
}
