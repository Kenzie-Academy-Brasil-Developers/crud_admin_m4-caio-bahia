import { client } from "../../database"
import "express-async-errors"

export const addUserToCourseService = async (userId: string, courseId: string): Promise<Object> => {
  const QueryString: string = `
  
  INSERT INTO "userCourses"
  	("userId","courseId")
    VALUES ($1,$2)
    RETURNING *
  `

  await client.query(QueryString, [userId, courseId])

  return { message: "User successfully vinculed to course" }
}
