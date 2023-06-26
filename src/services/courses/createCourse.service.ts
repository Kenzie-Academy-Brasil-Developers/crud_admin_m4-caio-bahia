import format from "pg-format"
import { client } from "../../database"
import { course, courseRequest, courseResult } from "../../interfaces/courses.interfaces"

const createCourseService = async (courseData: courseRequest): Promise<course> => {
  const QueryString: string = format(
    `
    INSERT INTO courses (%I)
    VALUES (%L)
    RETURNING *
    `,
    Object.keys(courseData),
    Object.values(courseData)
  )

  const QueryResult: courseResult = await client.query(QueryString)

  return QueryResult.rows[0]
}

export { createCourseService }
