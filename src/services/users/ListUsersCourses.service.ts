import { client } from "../../database"
import { AppError } from "../../errors"
import "express-async-errors"
import { userWithoutPassword } from "../../schemas/user.schema"
import { user, userResult } from "../../interfaces/user.interfaces"

export const listUserCoursesServices = async (userId: string) => {
  const QueryString: string = `
    SELECT 
        c."id" "courseId",
        c."name" "courseName",
        c."description" "courseDescription",
        uc."active" "userActiveInCourse",
        u."id" "userId",
        u."name" "userName"
    FROM users u 
        JOIN "userCourses" uc
            ON u.id = uc."userId"
        JOIN courses c 
            ON c.id = uc."courseId"
        WHERE u.id = $1
    `

  const QueryResult: userResult = await client.query(QueryString, [userId])

  if (QueryResult.rowCount === 0) {
    throw new AppError("No course found", 404)
  }

  return QueryResult.rows
}
