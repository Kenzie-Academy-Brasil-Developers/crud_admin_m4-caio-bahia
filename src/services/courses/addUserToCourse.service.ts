import { client } from "../../database"
import "express-async-errors"
import { AppError } from "../../errors"

export const addUserToCourseService = async (userId: string, courseId: string): Promise<Object> => {
  const CourseExists = `
  SELECT * FROM courses
  where id= $1;
  
  `
  const CourseExistsResult = await client.query(CourseExists, [courseId])
  if (CourseExistsResult.rowCount === 0) {
    throw new AppError("User/course not found", 404)
  }
  const QueryString: string = `
  
  INSERT INTO "userCourses"
  	("userId","courseId")
    VALUES ($1,$2)
    RETURNING *
  `

  const QueryResult = await client.query(QueryString, [userId, courseId])

  return { message: "User successfully vinculed to course" }
}
