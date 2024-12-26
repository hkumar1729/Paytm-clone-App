

export default function Balance({balance}){
    console.log(balance)
    return <div className="font-extrabold text-lg font-san ml-3 mt-7">
        Your Balance:  ₹{balance}
    </div>
    
}