export default function Appbar({name, navigate}){
    return <div className="flex justify-between items-center bg-gray-900 text-gray-100 hover:bg-gray-800 h-14">
        <div className="font-extrabold text-2xl font-san ml-5">
            PAYMENT APP
        </div>
        <div className="flex justify-between font-extrabold text-xl font-san ">
            <div className="mr-3">
                {name}
            </div>
            <div className="flex justify-center items-center rounded-full border-2 mr-5 w-8 h-8">
                {name[0].toUpperCase()}
            </div>
            <button onClick={()=>{
                localStorage.removeItem('token')
                navigate('/signin')
            }} className="text-sm mr-3">Logout</button>
    </div>
</div>
}