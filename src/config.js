import dotenv from "dotenv"
import path from "node:path"
import { fileURLToPath } from "node:url"


const thisPath = path.dirname(fileURLToPath(import.meta.url))
const projectPath = thisPath.split('/').slice(0, -1).join('/')

dotenv.config()

const PORT = process.env.PORT ?? 3000

export {
  PORT,
  projectPath
}