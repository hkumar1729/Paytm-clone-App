import {Heading} from '../components/Heading'
import Subheading from '../components/Subheading'
import {Inputfield} from '../components/Inputfield'
import Button from '../components/Button'
import Password from '../components/Password'
import Bottomwarning from '../components/Bottomwarning'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup(){
    const [username,setUsername] = useState('')
    const [pass,setpass] = useState('')
    const navigate = useNavigate()

    return <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center w-[32rem] h-[30rem] bg-slate-400 rounded-xl shadow-2xl">
            <div className="flex flex-col items-center w-[19rem] h-[20rem] bg-white shadow-2xl rounded-lg">
                <Heading label={'Sign in'}/>
                <Subheading label={'Enter your credentials to access your account'}/>
                <Inputfield onChange={(e)=>{setUsername(e.target.value)}} label={'Username'} placeholder={'Johndoe@example.com'}/>
                <Password onChange={(e)=>{setpass(e.target.value)}} label={'Password'} placeholder={'Password'}/>
                <Button onClick={async ()=>{
                    try{const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
                        username: username,
                        password:pass
                    })
                        if(resolve.data.msg === 'logged in'){
                            localStorage.setItem('token', `Bearer ${response.data.token}`)
                            alert(response.data.msg)
                            navigate(`/dashboard?name=${response.data.name}`)
                        }
                        else{
                            alert(response.data.msg)
                    }
                }catch(error){
                    alert(error.response.data.msg)
                    }
                }} label={'Sign in'}/>
                <Bottomwarning label={"Don't have an account?"} to={'/signup'} buttonText={'Sign up'}/>
            </div>
        </div>
  </div>
  
}