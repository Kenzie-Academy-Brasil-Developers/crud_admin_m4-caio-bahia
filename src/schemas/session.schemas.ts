import { z } from "zod"

export const sessionSchema = z.object({
  email: z.string().email().min(1).max(50),
  password: z.string().max(120).min(1)
})
