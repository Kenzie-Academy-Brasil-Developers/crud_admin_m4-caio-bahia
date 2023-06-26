import { Request, Response } from "express"
import { createUserService } from "../services/users/createUsers.services"

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser = await createUserService(req.body)

  return res.status(201).json(newUser)
}

const listUserController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json()
}

export { createUserController, listUserController }
