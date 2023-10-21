import express from 'express'
import cookieParser from 'cookie-parser'
import { PORT } from './config.js'
import { routerAPI } from './network/routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

routerAPI(app)

app.listen(PORT, console.log(`http://localhost:${PORT}`))
