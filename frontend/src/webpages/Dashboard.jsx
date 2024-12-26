import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import User from "../components/User";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Dashboard(){
    const [balance, setBalance] = useState()
    const [searchparams] = useSearchParams()
    const name = searchparams.get('name')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/account/balance',{
            headers:{
                authorization: localStorage.getItem('token')
            }
        }).then(resolve => setBalance(resolve.data.balance))
    },[])
    
    return <div>
        <Appbar name={name} navigate={navigate}/>
        <Balance balance={balance}/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <User/>
        

    </div>
}