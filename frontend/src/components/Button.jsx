export default function Button({label, onClick}){
    return <div>
    <button onClick={onClick} className='bg-black text-white rounded w-72 py-1 px-3 mt-6'>{label}</button>
  </div>
}