import { Request, Response } from "express"
import { deleteUserCourseService } from "../services/users/deleteUserCourses.service"
import { createCourseService } from "../services/courses/createCourse.service"
import { addUserToCourseService } from "../services/courses/addUserToCourse.service"

const coursesDeleteController = async (req: Request, res: Response): Promise<Response> => {
  await deleteUserCourseService(req.params.id)
  return res.status(204).json()
}
const createCourseController = async (req: Request, res: Response): Promise<Response> => {
  const newCourse = await createCourseService(req.body)
  return res.status(201).json(newCourse)
}
const addUserToCourseController = async (req: Request, res: Response): Promise<Response> => {
  const { courseId, userId } = req.params
  const addUser = await addUserToCourseService(userId, courseId)
  return res.status(201).json(addUser)
}

export { createCourseController, addUserToCourseController }
