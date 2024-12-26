import { atom, selector } from "recoil"
import axios from "axios"

const filterAtom = atom({
    key:'filterAtom',
    default:''
})

const Users = atom({
    key:'Users',
    default: selector({
        key:'networkHandling',
        get:async ({get})=>{
            const filter = get(filterAtom)
            const res = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            return res.data.user
        }
    })
})

export {Users, filterAtom}