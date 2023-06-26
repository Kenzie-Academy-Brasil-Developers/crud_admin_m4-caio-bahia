import express, { Application, json } from "express"
import { userRouter } from "./routers/users.route"
// import { handleErrors } from "./errors"
import { sessionRouter } from "./routers/session.route"

const app: Application = express()
app.use(json())

app.use("/users", userRouter)
app.use("/login", sessionRouter)

// app.use(handleErrors)
export default app
