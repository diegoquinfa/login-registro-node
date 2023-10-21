import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

import db from "./../db.js";

async function onlyAdmin(req, res, next) {
  const logueado = await verifyCookie(req);
  if (logueado) return next();
  return res.redirect("/")
}

async function onlyPublic(req, res, next) {
  const logueado = await verifyCookie(req);
  if (!logueado) return next();
  return res.redirect("/admin")
}

async function verifyCookie(req) {
  const cookieJWT = req.cookies.jwt
  if (cookieJWT) {
    const decodificado = jsonwebtoken.verify(cookieJWT, JWT_SECRET)
    const { users } = await db.openDB()

    const existUser = users.find(u => u.user == decodificado.user)

    if (existUser) {
      return true
    }
    return false
  }
  return false
}


export const authorization = {
  onlyAdmin,
  onlyPublic,
}