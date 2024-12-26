import {Heading} from '../components/Heading'
import Subheading from '../components/Subheading'
import {Inputfield} from '../components/Inputfield'
import Button from '../components/Button'
import Password from '../components/Password'
import Bottomwarning from '../components/Bottomwarning'
import { LastNameAtom, FirstNameAtom, UsernameAtom, PasswordAtom } from '../store/atom/signup'
import {useRecoilValue, useRecoilState} from 'recoil'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
    const [FirstName, setFirstName] = useRecoilState(FirstNameAtom)
    const [LastName, setLastName] = useRecoilState(LastNameAtom)
    const [Username, setUsername] = useRecoilState(UsernameAtom)
    const [Pass, setPass] = useRecoilState(PasswordAtom)
    const navigate = useNavigate()

    return <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center w-[32rem] h-[38rem] bg-slate-400 rounded-xl shadow-2xl">
            <div className="flex flex-col items-center w-[19rem] h-[30rem] bg-white shadow-2xl rounded-lg">
                <Heading label={'Sign up'}/>
                <Subheading label={'Add information to create your account'}/>

                <Inputfield onChange={(e)=>{
                    setFirstName(e.target.value)
                }} label={'First name'} placeholder={'John'}/>

                <Inputfield onChange={(e)=>{
                    setLastName(e.target.value)
                }} label={'Last name'} placeholder={'Doe'}/>

                <Inputfield onChange={(e)=>{
                    setUsername(e.target.value)
                }} label={'Username'} placeholder={'Johndoe@example.com'}/>

                <Password onChange={(e)=>{
                    setPass(e.target.value)
                }} label={'Password'} placeholder={'Password'}/>

                <Button onClick={async ()=>{
                    try{const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        first_name:FirstName,
                        last_name:LastName,
                        username:Username,
                        password:Pass
                    })
                    if(response.data.msg === 'User created successfully'){
                        localStorage.setItem('token', `Bearer ${response.data.token}`)
                        alert(response.data.msg)
                        navigate(`/dashboard?name=${FirstName}`)
                    }
                    else{
                        alert(response.data.msg)
                    }
                    } catch(error){
                        alert(error.response.data.msg)
                    }
                    
                }} label={'Sign Up'}/>

                <Bottomwarning label={'Already have an account?'} buttonText={'Sign in'} to={'/signin'}/>
            </div>
        </div>
  </div>
  
}