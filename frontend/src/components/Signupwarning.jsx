export default function SignupWarning(){
    return <div className="flex flex-row text-slate-500 text-sm font-sans mt-1">
    <div>
        Don't have an account?
    </div>
    <div className="underline pointer">
        <a href='http://localhost:5173/signup'>{'Sign up'}</a> 
    </div>
</div>
}