const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({
  path: '.env'
})
const {getUrls} = require('./src/util/misc')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL}))
app.use(cookieParser())


const routes = require('./rotas')

app.use(routes)

const { localUrl, staticUrl, port } = getUrls()

app.listen(port, () => {
  console.info(`servidor ON em ${localUrl} ou ${staticUrl}`)
})
