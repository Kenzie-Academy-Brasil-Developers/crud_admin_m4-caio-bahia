import { client } from "../../database"
import { AppError } from "../../errors"

export const softDeleteUserFromCourseService = async (
  userId: string,
  courseId: string
): Promise<void> => {
  const QueryString = `
  UPDATE "userCourses"
  SET active = false
    WHERE "userId" = $1
    AND "courseId" = $2
`

  const QueryResult = await client.query(QueryString, [userId, courseId])

  if (QueryResult.rowCount === 0) {
    throw new AppError("User/course not found", 404)
  }
}
