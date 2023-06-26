import { Router } from "express"
import { sessionController } from "../controllers/sessions.controller"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import { sessionSchema } from "../schemas/session.schemas"

export const sessionRouter: Router = Router()

sessionRouter.post("", ensureDataIsValidMiddleware(sessionSchema), sessionController) //Criar o token de autenticação para um usuário
