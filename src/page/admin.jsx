import { Link } from "react-router-dom"
function Admin() {
  return (
    <>
      <div className=" w-full flex justify-around text-3xl py-8 gap-1 bg-blue-800">
       <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">Home</Link>
       <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">About us</Link>
      </div>
      <div >
        <h1 className=" mx-20 my-10 flex font-bold text-9xl text-white w-82 rounded-xl hover:text-red-500 animate-pulse ">WELL COME TO OUR WEBSITE</h1>
      </div>
    </>
  )
}
export default Admin