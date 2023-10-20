import path from "node:path"
import { projectPath } from "../../config.js"


const htmlHome = (req, res) => {
  res.sendFile(path.join(projectPath, "public", "index.html"))
}

const htmlLogin = (req, res) => {
  res.sendFile(path.join(projectPath, "public", "pages", "login.html"))
}


export {
  htmlHome,
  htmlLogin
}