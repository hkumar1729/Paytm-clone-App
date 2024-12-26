const mongoose = require('mongoose')
const {Schema} = require('mongoose')
mongoose.connect("mongodb+srv://harshk1729:nVnbQR3xo5k9C1r8@cluster0.gebhy.mongodb.net/test")

const userSchema = new Schema({
    first_name:{
        type: String,
        required: true,
        minLength:1,
        maxLength:50,
        trim:true
    },
    last_name: {
        type: String,
        required: true,
        minLength:1,
        maxLength:50,
        trim:true
    },
    username:{
        type: String,
        required: true,
        minLength:5,
        maxLength:30,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        minLength:8,
        required:true
    }
})


const accountSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required: true
    },
    balance:{
        type:Number,
        required:true
    }
})

const Account = mongoose.model("Balance", accountSchema)
const Users = mongoose.model('Credentials', userSchema)

module.exports = {Users, Account}