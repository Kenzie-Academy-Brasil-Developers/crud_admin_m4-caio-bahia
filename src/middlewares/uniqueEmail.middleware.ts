import { NextFunction, Request, Response } from "express"
import { userResult } from "../interfaces/user.interfaces"
import { client } from "../database"

const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email } = req.body

  if (!email) {
    return next()
  }

  const query: userResult = await client.query('SELECT * FROM "users" WHERE "email" = $1;', [email])

  if (query.rowCount != 0) {
    return res.status(409).json("Email already exists!")
  }

  return next()
}

export { uniqueEmail }
