import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import User from "../components/User";

export default function Dashboard(){
    
    return <div>
        <Appbar/>
        <Balance balance={'100000'}/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <User/>
        

    </div>
}