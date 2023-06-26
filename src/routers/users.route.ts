import { Router } from "express"
import { createUserController } from "../controllers/user.controller"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { createUserSchema } from "../schemas/user.schema"
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware"

export const userRouter: Router = Router()

userRouter.post(
  "",
  uniqueEmail,
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
)
