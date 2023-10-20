import express from "express"
import { htmlHome, htmlLogin } from "./pages.controller.js"

const routerPages = express.Router()

routerPages.get('/', htmlHome)
routerPages.get('/login', htmlLogin)

export {
  routerPages
}