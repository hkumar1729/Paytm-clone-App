const mongoose = require('mongoose')
const express = require('express')
const zod = require('zod')
const router = express.Router();
const authMiddleware = require('../middleware')
const {Account} = require('../db')

const  detailSchema = zod.object({
    to:zod.string(),
    amount: zod.number()
})

router.get('/balance', authMiddleware ,async (req, res)=>{
    const userBalance = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: (userBalance.balance).toFixed(2)
    })
})

router.post('/transaction', authMiddleware ,async (req,res)=>{
    const session = await mongoose.startSession()
    session.startTransaction()


    const detail = req.body

    const {success} = detailSchema.safeParse(detail)
    if(!success){
        await session.abortTransaction()
        return res.json({
            msg:'invalid input in body'
        })
    }



    try{
        const currentBalance = await Account.findOne({
            userId: req.userId
        })
        if(currentBalance.balance < detail.amount){
            await session.abortTransaction()
            return res.status(400).json({
                msg:'Insufficient balance'
            })
        }

        const recieverAccount = await Account.findOne({
            userId: detail.to
        })
        if(!recieverAccount){
            await session.abortTransaction()
            return res.status(400).json({
                msg:'Not a user exist'
            })
        }


        await Account.updateOne({userId: recieverAccount.userId}, {$inc:{balance:detail.amount}})
        await Account.updateOne({userId: currentBalance.userId},{ $inc:{balance:-detail.amount}})

        await session.commitTransaction()
        session.endSession()
        res.json({
            msg:'Transaction successful'
        })
    }
    catch(err){
        await session.abortTransaction()
        session.endSession()
        res.json({
            msg:'Transaction failed'
        })
    }

})
module.exports = router