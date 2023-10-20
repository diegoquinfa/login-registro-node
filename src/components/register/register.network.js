import { Router } from "express";
import { createNewUser } from "./register.controller.js";


const routerRegister = Router()

routerRegister.post("/", createNewUser)

export {
  routerRegister
}