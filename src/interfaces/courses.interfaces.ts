import { z } from "zod"
import { QueryResult } from "pg"
import { courseSchema, createCourseSchema } from "../schemas/courses.schema"

type course = z.infer<typeof courseSchema>
type courseRequest = z.infer<typeof createCourseSchema>
type courseResult = QueryResult<course>

export { course, courseRequest, courseResult }
