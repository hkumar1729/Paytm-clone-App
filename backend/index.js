const express = require("express")
const app = express()
const mainRouter = require('./routes/user')
const accountRouter = require('./routes/account')
const cors = require('cors')
const jwt = require('jsonwebtoken')
app.use(express.json())
app.use(cors())

app.use('/api/v1/user', mainRouter)
app.use('/api/v1/account', accountRouter)

app.listen(3000)


