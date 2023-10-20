import path from "node:path"
import { projectPath } from "../../config.js"


const renderHome = (req, res) => {
  res.sendFile(path.join(projectPath, "public", "index.html"))
}

const renderLogin = (req, res) => {
  res.sendFile(path.join(projectPath, "public", "pages", "login", "login.html"))
}

const renderRegister = (req, res) => {
  res.sendFile(path.join(projectPath, "public", "pages", "register", "register.html"))
}

const renderAdmin = (req, res) => {
  res.sendFile(path.join(projectPath, "public", "pages", "admin", "admin.html"))
}

export {
  renderHome,
  renderLogin,
  renderRegister,
  renderAdmin
}