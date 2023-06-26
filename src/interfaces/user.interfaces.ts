import { z } from "zod"
import { QueryResult } from "pg"
import { userSchema, createUserSchema, userWithoutPassword } from "../schemas/user.schema"

type user = z.infer<typeof userSchema>
type userRequest = z.infer<typeof createUserSchema>
type userReturn = z.infer<typeof userWithoutPassword>
type userResult = QueryResult<user>

export { user, userRequest, userResult, userReturn }
