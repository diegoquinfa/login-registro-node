import { Router } from 'express'
import { register, login } from './auth.controller.js'

const routerAuth = Router()

routerAuth.post('/register', register)
routerAuth.post('/login', login)

export {
  routerAuth
}
