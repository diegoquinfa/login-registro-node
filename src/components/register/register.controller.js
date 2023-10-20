import bcryptjs from "bcryptjs"


const users = [
  {
    "user": "sundac",
    "email": "diegoquinfa@gmail.com",
    "password": "$2a$05$f0p62/eiwjyVBKDY500m.enFHmUTBH5jZe3sAfS1Msl5.4vDH29Ea"
  },
]


const createNewUser = async (req, res) => {

  let { user, password, email } = req.body
  user = user.toLowerCase()
  email = email.toLowerCase()

  if (!user || !email || !password) {
    res.status(400).json({
      status: "Error",
      message: "Los campos estan incompletos.",
    })

    return
  }

  const existUser = users.find(u => u.user == user);
  if (existUser) {
    res.status(400).json({
      status: "Error",
      message: "El usuario ya existe.",
    })

    return
  }

  const salt = await bcryptjs.genSalt(5)
  const hashPassword = await bcryptjs.hash(password, salt)
  const newUser = {
    user, email, password: hashPassword
  }
  users.push(newUser)

  console.log("Usuario agregado:", newUser)

  res.json({
    status: "ok",
    message: `Usuario ${newUser.user} agregado.`,
    redirect: "/admin"
  })
}


export {
  createNewUser
}