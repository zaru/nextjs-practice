import z from "zod";

export const formSchema = z.object({
  name: z.string().min(1).max(4),
  tel: z.string().min(1).max(4),
});
