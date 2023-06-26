import { Router } from "express"
import { deleteUserCourseService } from "../services/users/deleteUserCourses.service"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { createCourseSchema } from "../schemas/courses.schema"
import {
  addUserToCourseController,
  createCourseController,
  getAllCoursesController,
  listCourseUsersController,
  softDeleteUserFromCourseController
} from "../controllers/courses.controller"
import { addUserToCourseService } from "../services/courses/addUserToCourse.service"
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware"
import { verifyIfUserisAdmin } from "../middlewares/isAdmin.middleware"
import { listAllUsersController } from "../controllers/user.controller"
import { listCoursesUsersServices } from "../services/courses/listCoursesUsersServices.service"

export const coursesRouter: Router = Router()

coursesRouter.post(
  "",
  ensureDataIsValidMiddleware(createCourseSchema),
  verifyIfUserisAdmin,
  createCourseController
)
coursesRouter.get("", ensureTokenIsValidMiddleware, verifyIfUserisAdmin, getAllCoursesController)
coursesRouter.post(
  "/:courseId/users/:userId",
  ensureTokenIsValidMiddleware,
  verifyIfUserisAdmin,
  addUserToCourseController
)
coursesRouter.delete(
  "/:courseId/users/:userId",
  ensureTokenIsValidMiddleware,
  verifyIfUserisAdmin,
  softDeleteUserFromCourseController
)
coursesRouter.get(
  "/:courseId/users",
  ensureTokenIsValidMiddleware,
  verifyIfUserisAdmin,
  listCourseUsersController
)
