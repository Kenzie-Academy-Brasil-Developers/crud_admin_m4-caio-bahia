import express, { Application, json } from "express"
import { userRouter } from "./routers/users.route"
import { handleErrors } from "./errors"

const app: Application = express()
app.use(json())

app.use("/users", userRouter)

app.use(handleErrors)
export default app
