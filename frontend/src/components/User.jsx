import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"



export default function User(){
    const [userList, setUserList] = useState([])
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`).then(res =>{setUserList(res.data.user)})
    },[filter])

    return <div className="flex flex-col mt-1">
        <div className="font-extrabold text-2xl font-san ml-5">
            Users
        </div>
        <div>
            <input onChange={(e)=>{setFilter(e.target.value)}} className="w-96 border border-black rounded pl-3 pt-1 pb-1 ml-4 mr-5 mt-4" type='text' placeholder="Search users..."/>
        </div>
        {userList.map((value)=>{
            return <div key={value.id} className="flex justify-between items-center bg-slate-100 p-2 mt-3">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center bg-gray-300 rounded-full border-0 w-10 h-10 ml-3">
                        {value.first_name[0].toUpperCase()}
                    </div>
                    <div className="font-semibold text-lg ml-3">
                        {`${value.first_name} ${value.last_name}`}
                    </div>
                </div>
                <div>
                    <button onClick={()=>{
                        navigate(`/send?id=${value.id}&name=${value.first_name}`)
                    }} className='bg-black text-white rounded w-32 py-1 px-3 mr-5'>Send Money</button>
                </div>
        </div>
        })}

        
    </div>
}