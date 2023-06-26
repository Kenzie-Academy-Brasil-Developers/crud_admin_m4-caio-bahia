import { client } from "../../database"

export const softDeleteUserFromCourseService = async (
  userId: string,
  courseId: string
): Promise<void> => {
  const QueryString = `
  UPDATE "usersCourses"
  SET active = false
    WHERE "userId" = $1
    AND "courseId" = $2
`

  await client.query(QueryString, [userId, courseId])
}
