import { client } from "../../database"
import { AppError } from "../../errors"

export const softDeleteUserFromCourseService = async (
  userId: string,
  courseId: string
): Promise<void> => {
  const CourseExists = `
  SELECT * FROM courses
  where id= $1;

  `

  const CourseExistsResult = await client.query(CourseExists, [courseId])
  if (CourseExistsResult.rowCount === 0) {
    throw new AppError("User/course not found", 404)
  }

  const userExists = `
  SELECT * FROM users
  where id= $1;
  `
  const userExistsResult = await client.query(userExists, [userId])
  if (userExistsResult.rowCount === 0) {
    throw new AppError("User/course not found", 404)
  }

  const QueryString = `
  UPDATE "userCourses"
  SET active = false
    WHERE "userId" = $1
    AND "courseId" = $2
`

  const QueryResult = await client.query(QueryString, [userId, courseId])
}
