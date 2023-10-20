import path from "node:path"
import { projectPath } from "../../config.js"
import fs from "node:fs/promises"

const openDB = async () => {
  const file = await fs.readFile(path.join(projectPath, "db.json"))
  const data = JSON.parse(file)

  console.log(data)
}

export default {
  openDB
}