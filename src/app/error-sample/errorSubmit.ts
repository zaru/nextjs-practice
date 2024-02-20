"use server";

export async function errorSubmit(formData: FormData) {
  const result = await fetch("https://example.com/");
  const data = await result.json();
  return {
    success: true,
  };
}
