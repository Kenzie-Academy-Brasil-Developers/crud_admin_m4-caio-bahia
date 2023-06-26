import { Request, Response } from "express"
import { createUserService } from "../services/users/createUsers.service"
import { listUserCoursesServices } from "../services/users/ListUsersCourses.service"
import { client } from "../database"

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

const listAllUsersController = async (req: Request, res: Response): Promise<Response> => {
  const QueryStringAll: string = `SELECT * FROM users`
  const QueryResultAll = await client.query(QueryStringAll)

  return res.status(201).json(QueryResultAll.rows)
}

export {
  createUserController,
  listUserController,
  listUserCoursesController,
  listAllUsersController
}
