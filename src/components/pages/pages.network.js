import express from "express"
import { renderHome, renderLogin, renderRegister, renderAdmin } from "./pages.controller.js"

const routerPages = express.Router()

routerPages.get('/', renderHome)
routerPages.get('/login', renderLogin)
routerPages.get('/register', renderRegister)
routerPages.get('/admin', renderAdmin)

export {
  routerPages
}