import { Router } from "express"
import { createUserController, listUserCoursesController } from "../controllers/user.controller"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { createUserSchema } from "../schemas/user.schema"
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware"
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware"

export const userRouter: Router = Router()

userRouter.post(
  "",
  uniqueEmail,
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
)

userRouter.get("/:id/courses", ensureTokenIsValidMiddleware, listUserCoursesController)
