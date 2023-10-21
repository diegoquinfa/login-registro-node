import express from "express"
import { authorization } from "../../middlewares/authorization.js"
import { renderHome, renderLogin, renderRegister, renderAdmin } from "./pages.controller.js"

const routerPages = express.Router()

routerPages.get('/', renderHome)
routerPages.get('/login', authorization.onlyPublic, renderLogin)
routerPages.get('/register', authorization.onlyPublic, renderRegister)
routerPages.get('/admin', authorization.onlyAdmin, renderAdmin)

export {
  routerPages
}