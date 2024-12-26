import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import User from "../components/User";
import axios from "axios";

export default function Dashboard(){
    const [balance, setBalance] = useState()

    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/account/balance',{
            headers:{
                authorization: localStorage.getItem('token')
            }
        }).then(resolve => setBalance(resolve.data.balance))
    },[])
    console.log(balance)
    
    return <div>
        <Appbar/>
        <Balance balance={balance}/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <User/>
        

    </div>
}