import { z } from "zod"

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1).max(50),
  email: z.string().email().min(1).max(50),
  password: z.string().max(120).min(1),
  admin: z.boolean().default(false).optional()
})

const createUserSchema = userSchema.omit({
  id: true
})

const userWithoutPassword = userSchema.omit({
  password: true
})

const userWithoutAdmAndPassword = userSchema.omit({
  password: true,
  admin: true
})

export { userSchema, createUserSchema, userWithoutPassword, userWithoutAdmAndPassword }
