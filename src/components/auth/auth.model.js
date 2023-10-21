import fs from "node:fs/promises"
import path from "node:path"
import { projectPath } from "../../config.js"
import db from "../../db.js"

const addNewUser = async (newUser) => {
  const dbJson = await db.openDB()

  dbJson.users.push(newUser)

  await fs.writeFile(
    path.join(projectPath, "db.txt"),
    JSON.stringify(dbJson, null, 2)
  )
}

const existUser = async (userName) => {
  const { users } = await db.openDB()
  const existUser = users.find(u => u.user == userName) ?? false

  return existUser && true
}

const existEmail = async (email) => {
  const { users } = await db.openDB()
  const existEmail = users.find(u => u.email == email) ?? false

  return existEmail && true
}

const getUser = async (userName) => {
  const { users } = await db.openDB();
  return users.find(u => u.user == userName)
}

export default {
  addNewUser,
  existEmail,
  existUser,
  getUser
}