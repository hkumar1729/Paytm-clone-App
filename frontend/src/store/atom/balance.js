import axios from "axios";
import { atom, selector } from "recoil";


const userBalanceAtom = atom({
    key:"userBalance",
    default: selector({
        key:"userBalance",
        get: async ({get})=>{
            const balance = await axios.get('http://localhost:3000/api/v1/account/balance',{
                headers:{
                    authorizaton: localStorage.getItem('token')
                }
            })

            return balance.data.balance

        }
    })
})
export default userBalanceAtom

