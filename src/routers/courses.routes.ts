import { Router } from "express"
import { deleteUserCourseService } from "../services/users/deleteUserCourses.service"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { createCourseSchema } from "../schemas/courses.schema"
import {
  addUserToCourseController,
  createCourseController
} from "../controllers/courses.controller"
import { addUserToCourseService } from "../services/courses/addUserToCourse.service"

export const coursesRouter: Router = Router()

coursesRouter.post("", ensureDataIsValidMiddleware(createCourseSchema), createCourseController) //Cadastrar um novo curso
coursesRouter.get("") //Listar todos os cursos
coursesRouter.post("/:courseId/users/:userId", addUserToCourseController) //Matricular o usuário em um curso
coursesRouter.delete("/:courseId/users/:userId", deleteUserCourseService) //Setar matrícula para false do usuário em um curso
coursesRouter.get("/:courseId/users") //Listar todos os usuários matriculados em um curso especifico
