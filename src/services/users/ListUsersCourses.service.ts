import { client } from "../../database"
import { AppError } from "../../errors"

export const listUserCoursesServices = async (userId: string) => {
  const QueryString: string = `
    SELECT 
        c."id" "courseId",
        c."name" "courseName",
        c."description" "courseDescription",
        uc."active" "userActiveOnCourse",
        u."id" "userId",
        u."name" "userName"
    FROM users u 
        JOIN "usersCourses" uc
            ON u.id = uc."userId"
        JOIN courses c 
            ON c.id = uc."courseId"
        WHERE u.id = $1
    `
  const QueryResult = await client.query(QueryString, [userId])

  if (QueryResult.rowCount === 0) {
    throw new AppError("No course found on this user!", 404)
  }

  return QueryResult.rows
}