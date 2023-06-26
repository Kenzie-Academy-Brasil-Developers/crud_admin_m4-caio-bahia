import { NextFunction, Request, Response } from "express"
import { ZodTypeAny } from "zod"
import { AppError } from "../errors"
import { verify } from "jsonwebtoken"
import { error } from "console"

export const ensureTokenIsValidMiddleware = (
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
    res.locals = { ...res.locals, decoded }
  })
  return next()
}
