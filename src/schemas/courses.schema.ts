import { z } from "zod"

const courseSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1).max(15),
  description: z.string()
})

const createCourseSchema = courseSchema.omit({
  id: true
})

export { courseSchema, createCourseSchema }
