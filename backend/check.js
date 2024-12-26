const jwt = require('jsonwebtoken')
const JWT_SECERET = 'harshi'
const authHeader = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzY0NzlmMDg1Njk4OGY0NDc4YTIxOTciLCJpYXQiOjE3MzQ2MzgwNjR9.AMRwZ0uiirVLj3tO0oyTl3tIftt5-n-pe3FTBLKa0ko"
const token = authHeader.split(' ')[1]
const decoded = jwt.verify(token, JWT_SECERET)
console.log(decoded)