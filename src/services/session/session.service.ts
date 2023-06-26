import { compare } from "bcryptjs"
import { client } from "../../database"
import { AppError } from "../../errors"
import { SessionRequest } from "../../interfaces/session.interface"
import { userResult } from "../../interfaces/user.interfaces"
import { sign } from "jsonwebtoken"

export const sessionService = async (sessionData: SessionRequest): Promise<string> => {
  const queryString: string = `
    SELECT * FROM users
    WHERE email = $1
    `

  const queryResult: userResult = await client.query(queryString, [sessionData.email])

  if (queryResult.rowCount === 0) {
    throw new AppError("Wrong email/password", 401)
  }

  const matchPassword: boolean = await compare(sessionData.password, queryResult.rows[0].password)

  if (!matchPassword) {
    throw new AppError("Wrong email/password", 401)
  }

  const token: string = sign({ email: queryResult.rows[0].email }, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: queryResult.rows[0].id.toString()
  })
  return token
}
