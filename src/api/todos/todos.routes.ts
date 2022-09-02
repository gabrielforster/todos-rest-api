import {Router} from "express"
import * as TodoHandler from "./todos.handler"

const router =  Router()
router.get("/", TodoHandler.findAll)

export default router