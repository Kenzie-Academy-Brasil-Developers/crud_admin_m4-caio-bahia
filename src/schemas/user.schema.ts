import { z } from "zod"

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1).max(50),
  email: z.string().email().min(1).max(50),
  password: z.string().max(120).min(1),
  admin: z.boolean().default(false)
})

const createUserSchema = userSchema.omit({
  id: true,
  active: true
})

const userWithoutPassword = userSchema.omit({
  password: true
})

export { userSchema, createUserSchema, userWithoutPassword }
