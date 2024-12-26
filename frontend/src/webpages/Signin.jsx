import {Heading} from '../components/Heading'
import Subheading from '../components/Subheading'
import {Inputfield} from '../components/Inputfield'
import Button from '../components/Button'
import Password from '../components/Password'
import Bottomwarning from '../components/Bottomwarning'

export default function Signup(){
    return <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center w-[32rem] h-[30rem] bg-slate-400 rounded-xl shadow-2xl">
            <div className="flex flex-col items-center w-[19rem] h-[20rem] bg-white shadow-2xl rounded-lg">
                <Heading label={'Sign in'}/>
                <Subheading label={'Enter your credentials to access your account'}/>
                <Inputfield label={'Username'} placeholder={'Johndoe@example.com'}/>
                <Password label={'Password'} placeholder={'Password'}/>
                <Button label={'Sign in'}/>
                <Bottomwarning label={"Don't have an account?"} to={'/signup'} buttonText={'Sign up'}/>
            </div>
        </div>
  </div>
  
}