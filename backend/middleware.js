const JWT_SECERET = require('./config')
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            msg:'try again after some time',
        })
    }
    const token = authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token, JWT_SECERET)
        if(decoded){
            req.userId = decoded.userId
            next()
        }
    }
    catch(err){
        return res.status(403).json({
            msg:'invalid token',
            error: err
        })
    }
}

module.exports = authMiddleware