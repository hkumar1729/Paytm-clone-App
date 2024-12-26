const zod = require('zod')

const signupInfo = zod.object({
    first_name: zod.string(),
    last_name: zod.string(),
    username: zod.string(),
    password: zod.string()
})

const signinInfo = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

module.exports = {
    signinInfo, signupInfo
}