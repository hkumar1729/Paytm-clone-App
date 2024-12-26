const express = require('express')
const app = express()
const userRouter = require('./user')
const router = express.Router()
app.use('/api/v1/user', userRouter)
module.exports = router