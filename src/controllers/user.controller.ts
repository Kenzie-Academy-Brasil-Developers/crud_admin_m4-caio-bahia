import { Request, Response } from "express"
import { createUserService } from "../services/users/createUsers.service"
import { listUserCoursesServices } from "../services/users/ListUsersCourses.service"

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser = await createUserService(req.body)

  return res.status(201).json(newUser)
}

const listUserController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json()
}

const listUserCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const usersCourses = await listUserCoursesServices(req.params.id)
  return res.status(200).json(usersCourses)
}

export { createUserController, listUserController, listUserCoursesController }
