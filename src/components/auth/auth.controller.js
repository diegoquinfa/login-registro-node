import bcryptjs from "bcryptjs"
import model from "./auth.model.js"
import jsonwebtoken from "jsonwebtoken"
import { JWT_SECRET, JWT_EXPIRATION, JWT_COOKIE_EXPIRES } from "../../config.js"

const login = async (req, res) => {
  let { user, password } = req.body
  user = user.toLowerCase()

  if (!user || !password) {
    return res.status(400).json({
      status: "Error",
      message: "Los campos estan incompletos.",
    })
  }

  if (!await model.existUser(user)) {
    return res.status(400).json({
      status: "Error",
      message: "Datos incorrectos.",
    })
  }

  const { password: realPassword } = await model.getUser(user)

  const isPass = await bcryptjs.compare(password, realPassword)

  if (!isPass) {
    return res.status(400).json({
      status: "Error",
      message: "Datos incorrectos.",
    })
  }

  const token = jsonwebtoken.sign({ user }, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

  const cookieOption = {
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRES * 60 * 60 * 24 * 1000),
    path: "/"
  }

  res.cookie("jwt", token, cookieOption)
  res.json({
    status: "ok",
    message: "El usuario ha iniciado sesión.",
    redirect: "/admin"
  })
}

const register = async (req, res) => {
  let { user, password, email } = req.body
  user = user.toLowerCase()
  email = email.toLowerCase()


  if (!user || !email || !password) {
    return res.status(400).json({
      status: "Error",
      message: "Los campos estan incompletos.",
    })
  }

  if (await model.existUser(user)) {
    return res.status(400).json({
      status: "Error",
      message: "El usuario ya existe.",
    })
  }

  if (await model.existEmail(email)) {
    return res.status(400).json({
      status: "Error",
      message: "El email ya esta asociado a una cuenta existente.",
    })
  }

  const salt = await bcryptjs.genSalt(5)
  const hashPassword = await bcryptjs.hash(password, salt)
  const newUser = {
    user, email, password: hashPassword
  }

  model.addNewUser(newUser)

  console.log("Usuario agregado:", newUser)

  return res.json({
    status: "ok",
    message: `Usuario ${newUser.user} agregado.`,
    redirect: "/login"
  })
}


export {
  login,
  register,
}