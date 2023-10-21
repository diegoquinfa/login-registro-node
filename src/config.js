import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import db from './db.js'

const thisPath = path.dirname(fileURLToPath(import.meta.url))
const projectPath = thisPath.split('/').slice(0, -1).join('/')

dotenv.config();

(async () => {
  await db.openDB()
})()

const PORT = process.env.PORT ?? 3000
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRATION = process.env.JWT_EXPIRATION

const JWT_COOKIE_EXPIRES = process.env.JWT_COOKIE_EXPIRES || 1

export {
  PORT,
  JWT_SECRET,
  JWT_EXPIRATION,
  JWT_COOKIE_EXPIRES,
  projectPath
}
