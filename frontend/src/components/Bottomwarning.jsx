import {Link} from 'react-router-dom'

export default function Bottomwarning({label, buttonText, to}){
    return <div className="flex flex-row  mt-1">
        <div className=" text-slate-500 text-sm font-sans">
            {label}
        </div>
        <Link className="text-slate-500 text-sm font-sans underline" to={to}>
            {buttonText}
        </Link>
    </div>
}