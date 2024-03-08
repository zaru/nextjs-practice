"use server";

import * as qs from "qs";
import { parseFormData } from "parse-nested-form-data";
import z from "@/lib/zod";

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});
const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});
const schema = z.object({
  name: z.string().min(1),
  user: userSchema,
  colors: z.array(z.string()),
  posts: z.array(postSchema),
});

export async function parsedQs(formData: FormData) {
  const formDataToQueryString = (formData: FormData) => {
    const params = new URLSearchParams();
    for (const [key, value] of formData) {
      params.append(key, value as string);
    }
    return params.toString();
  };

  const data = qs.parse(formDataToQueryString(formData));
  const result = schema.safeParse(data);
  console.log(result);
}

export async function parseNestedFormData(formData: FormData) {
  const data = parseFormData(formData);
  const result = schema.safeParse(data);
  console.log(result);
}
