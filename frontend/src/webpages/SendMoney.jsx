import { useState } from "react";
import { Heading } from "../components/Heading";
import { AmountField } from "../components/sendmoneyinput";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function SendMoney(){
    const [amount, setAmount] = useState()
    const [searchparams] = useSearchParams()
    const id = searchparams.get('id')
    const name = searchparams.get('name')


    return <div className="flex justify-center items-center min-h-screen bg-slate-100">
        <div className="flex flex-col items-center w-[21rem] h-[23rem] rounded-xl bg-white shadow-2xl">
            <Heading label={'Send Money'}/>
            <div className="mt-24">
                <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center font-bold bg-green-500 text-white rounded-full border-0 w-10 h-10 text-lg">
                        {name[0].toUpperCase()}
                    </div>
                    <div className="ml-2 text-2xl font-bold">
                        {name}
                    </div>
                </div>
                    <AmountField onChange={(e)=>{
                        setAmount(e.target.value)
                    }} label={"Amount (in Rs)"} placeholder={'Enter amount'}/>
                    <button onClick={()=>{
                        axios.post('http://localhost:3000/api/v1/account/transaction',{
                            to:id,
                            amount:parseInt(amount)
                        },{
                            headers:{
                                authorization: localStorage.getItem('token')
                            }
                        })
                    }} className='bg-green-500 text-white rounded w-72 py-1 px-3 mt-5'>Pay</button>
                </div>
        </div>
    </div>
}