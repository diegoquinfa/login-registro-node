import express from "express"
import path from "node:path"
import { projectPath } from "../config.js"
import { routerPages } from "../components/pages/pages.network.js"

export const routerAPI = (app) => {
  app.use(express.static(path.join(projectPath, "public")))
  app.use("/", routerPages)
}