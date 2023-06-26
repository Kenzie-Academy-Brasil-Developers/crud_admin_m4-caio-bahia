import express, { Application, json } from "express"
import { userRouter } from "./routers/users.routes"
import { handleErrors } from "./errors"
import "express-async-errors"
import { sessionRouter } from "./routers/session.routes"
import { coursesRouter } from "./routers/courses.routes"

const app: Application = express()
app.use(json())

app.use("/users", userRouter)
app.use("/login", sessionRouter)
app.use("/courses", coursesRouter)

app.use(handleErrors)

export default app
