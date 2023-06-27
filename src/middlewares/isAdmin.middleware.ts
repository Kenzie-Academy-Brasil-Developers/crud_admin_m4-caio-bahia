import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { verify } from "jsonwebtoken"

export const verifyIfUserisAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  let token = req.headers.authorization

  if (!token) {
    throw new AppError("Missing bearer token", 401)
  }

  token = token.split(" ")[1]

  verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401)
    }
    if (decoded.admin === false) {
      throw new AppError("Insufficient permission", 403)
    }
    res.locals = { ...res.locals, decoded, admin: decoded.admin }
  })
  return next()
}
