import { Router } from "express"
import {
  createUserController,
  listAllUsersController,
  listUserCoursesController
} from "../controllers/user.controller"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { createUserSchema } from "../schemas/user.schema"
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware"
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware"
import { verifyIfUserisAdmin } from "../middlewares/isAdmin.middleware"

export const userRouter: Router = Router()

userRouter.post(
  "",
  uniqueEmail,
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
)

userRouter.get("/:id/courses", ensureTokenIsValidMiddleware, listUserCoursesController)
userRouter.get("", ensureTokenIsValidMiddleware, verifyIfUserisAdmin, listAllUsersController)
