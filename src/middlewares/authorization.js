import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'

import db from './../db.js'

const verifyCookie = async (req) => {
  const cookieJWT = req.cookies.jwt
  if (cookieJWT) {
    const decodificado = jsonwebtoken.verify(cookieJWT, JWT_SECRET)
    const { users } = await db.openDB()

    const existUser = users.find(u => u.user === decodificado.user)

    if (existUser) {
      return true
    }
    return false
  }
  return false
}

const onlyAdmin = async (req, res, next) => {
  const logueado = await verifyCookie(req)
  if (logueado) return next()
  return res.redirect('/')
}

const onlyPublic = async (req, res, next) => {
  const logueado = await verifyCookie(req)
  if (!logueado) return next()
  return res.redirect('/admin')
}

export const authorization = {
  onlyAdmin,
  onlyPublic
}
