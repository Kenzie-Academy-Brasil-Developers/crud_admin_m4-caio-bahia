import { Request, Response } from "express"
import { deleteUserCourseService } from "../services/users/deleteUserCourses.service"
import { createCourseService } from "../services/courses/createCourse.service"
import { addUserToCourseService } from "../services/courses/addUserToCourse.service"
import { softDeleteUserFromCourseService } from "../services/courses/softDeleteUserFromCourse.service"
import { client } from "../database"

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
const softDeleteUserFromCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { courseId, userId } = req.params
  await softDeleteUserFromCourseService(userId, courseId)
  return res.status(204).json({ message: "desativado" })
}

const getAllCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const QueryStringAll: string = `SELECT * FROM courses`
  const QueryResultAll = await client.query(QueryStringAll)

  return res.status(201).json(QueryResultAll.rows)
}

export {
  createCourseController,
  addUserToCourseController,
  softDeleteUserFromCourseController,
  getAllCoursesController
}
