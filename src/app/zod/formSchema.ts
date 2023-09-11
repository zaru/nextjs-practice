import z from "@/lib/zod";

export const schema = z.object({
  email: z.string().email().optional().or(z.literal("")),
});
