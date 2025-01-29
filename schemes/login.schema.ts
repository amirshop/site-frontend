import { z } from "zod";
export const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6, "Must be at least 6 characters"),
});

export type LoginSchemaType = z.output<typeof loginSchema>;
