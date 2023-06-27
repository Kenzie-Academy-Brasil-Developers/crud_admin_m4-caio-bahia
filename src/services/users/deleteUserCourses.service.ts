import { client } from "../../database"

export const deleteUserCourseService = async (userId: string): Promise<void> => {
  const QueryString: string = `
    UPDATE "userCourses"
    SET active = false 
    WHERE id = $1
    `

  await client.query(QueryString, [userId])
}
