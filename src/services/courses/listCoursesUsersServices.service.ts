import { client } from "../../database"
import { AppError } from "../../errors"
import "express-async-errors"

export const listCoursesUsersServices = async (courseId: string) => {
  const QueryString: string = `
  SELECT 

  u."id" "userId",
  u."name" "userName",
  c."id" "courseId",
  c."name" "courseName",
  c."description" "courseDescription",
  uc."active" "userActiveOnCourse"
  FROM courses c 
 JOIN "usersCourses" uc
    ON c.id = uc."courseId"
JOIN users u  
      ON u.id = uc."userId"
      WHERE c.id = $1;
    
    `
  const QueryResult = await client.query(QueryString, [courseId])
  console.log(QueryResult.rowCount)

  if (QueryResult.rowCount === 0) {
    throw new AppError("No Users in this Course", 404)
  }

  return QueryResult.rows
}