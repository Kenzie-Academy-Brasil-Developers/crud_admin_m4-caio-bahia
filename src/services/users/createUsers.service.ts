import format from "pg-format"
import { userRequest, userResult, userReturn } from "../../interfaces/user.interfaces"
import { hash } from "bcryptjs"
import { client } from "../../database"
import { userWithoutAdmAndPassword, userWithoutPassword } from "../../schemas/user.schema"

const createUserService = async (userData: userRequest): Promise<userReturn> => {
  userData.password = await hash(userData.password, 10)

  const QueryString: string = format(
    `
    INSERT INTO users (%I)
    VALUES (%L)
    RETURNING *
    `,
    Object.keys(userData),
    Object.values(userData)
  )

  const QueryResult: userResult = await client.query(QueryString)

  // if (QueryResult.rows[0].admin === false) {
  //   return userWithoutAdmAndPassword.parse(QueryResult.rows[0])
  // }
  return userWithoutPassword.parse(QueryResult.rows[0])
}

export { createUserService }
