const express = require('express')
const bcrypt = require('bcrypt')
const zod = require('zod')
const { Users, Account } = require('../db')
const jwt = require('jsonwebtoken')
const JWT_SECERET = require('../config')
const authMiddleware = require('../middleware')
const router = express.Router()



const signupSchema = zod.object({
    first_name: zod.string(),
    last_name: zod.string(),
    username: zod.string().email(),
    password: zod.string()
})

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const updateSchema = zod.object({
    first_name:zod.string(),
    last_name:zod.string(),
    password:zod.string()
})

router.post('/signup', async (req,res)=>{
    const body = req.body
    const {success} = signupSchema.safeParse(req.body)
    if(!success){
        return res.json({
            msg:'Invalid inputs'
        })
        return;
    }
    const check = await Users.findOne({
        username: body.username
    })
    if(check){
        return res.status(409).json({
            msg:"Email already taken"
        })
    }

    const passHash = await bcrypt.hash(body.password, 10)
    const user = await Users.create({...body,password:passHash})
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECERET)
    const userId = user._id
    
    await Account.create({
        userId,
        balance: (1 + Math.random()*10000).toFixed(2)
    })

    res.json({
        msg:'User created successfully',
        token: token
    })
    
})

router.post('/signin', async (req,res)=>{
    const body = req.body
    const {success} = signinSchema.safeParse(body)
    if(!success){
        res.status(400).json({
            msg: 'Invalid input'
        })
    }
    const user = await Users.findOne({
        username: body.username
    })
    if(!user){
        return res.json({
            msg:'User does not exist.'
        })
    }
    const passwordValid = await bcrypt.compare(body.password, user.password)
    if(!passwordValid){
        return res.json({
            msg:'incorrect password'
        })
    }
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECERET)
    res.json({
        msg:"logged in",
        token: token
    })
})

router.put('/', authMiddleware, async (req, res)=>{
    const body = req.body
    const {success} = updateSchema.safeParse(body)
    if(!success){
        return res.status(411).json({
            msg:'invalid input'
        })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    body.password = hashedPassword
    await Users.updateOne({_id:req.userId},{$set:req.body})
    res.json({
        msg:'Updated successfully'
    })
})

router.get('/bulk',(async (req,res)=>{
    const filter = req.query.filter || ''
    const person = await Users.find({
        $or:[{first_name:{'$regex':filter,$options: 'i'}},{last_name:{'$regex':filter,$options: 'i'}}]})
    res.json({
        user: person.map((value)=>({
            id:value._id,
            first_name:value.first_name,
            last_name:value.last_name,
            username:value.username
        }))
    })
}))
module.exports = router

