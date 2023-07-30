import {Link} from "react-router-dom"

function Home(){
    return(
        <>
        <div className=" my-5">
            <div className=" grid grid-rows-2 grid-flow-col gap-4 place-content-center my-40">
            <Link to="/pizza" className=" h-20 w-20 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-blue-800 px-4">PIZZA</Link>
            <Link to="/dosa" className=" my-2 h-20 w-20 flex items-center bg-gray-500 hover:text-red-500 px-4">DOSA</Link>
            <Link to="/meals" className=" h-20 w-20 flex items-center bg-green-500 px-4 hover:text-red-400">MEALS</Link>
            <Link to="/chats" className=" my-2 h-20 w-20 flex items-center bg-slate-300 hover:text-red-400 px-4">CHATS</Link>
            <Link to="/juice" className=" h-20 w-20 flex items-center bg-red-500 hover:text-red-400 px-4 ">JUICE</Link>
            <Link to="/icecream" className=" my-2 h-20 w-20 flex items-center bg-orange-500 hover:text-red-400 px-4">ICE CREAM</Link>
           </div>
        </div>
        </>
    )
}
export default Home