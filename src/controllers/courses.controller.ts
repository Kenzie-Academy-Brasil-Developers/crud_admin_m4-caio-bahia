import { Request, Response } from "express"
import { deleteUserCourseService } from "../services/users/deleteUserCourses.service"
import { createCourseService } from "../services/courses/createCourse.service"

const coursesDeleteController = async (req: Request, res: Response): Promise<Response> => {
  await deleteUserCourseService(req.params.id)
  return res.status(204).json()
}
const createCourseController = async (req: Request, res: Response): Promise<Response> => {
  const newCourse = await createCourseService(req.body)
  return res.status(201).json(newCourse)
}

export { createCourseController }
