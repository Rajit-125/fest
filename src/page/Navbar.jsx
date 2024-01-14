import { Link } from "react-router-dom"
function Navbar() {

  return (
    <>
     <div className=" w-full flex justify-around text-3xl py-6 gap-2 bg-blue-300" >
        <Link to="/">
          <h1 className=" font-bold text-black grid grid-flow-col text-3xl">
            <img src="./assets/fest.png" alt="logo" className=" h-12" />Fest Management System</h1>
        </Link>
        <div className=" mx-10 grid grid-flow-col">
          <Link to="/registration" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">
            Registration
          </Link>
          <Link to="/rstudents" className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">Registered students</Link>
        </div>
      </div>
      <div>
        <h2 className=" mx-96 my-28 text-5xl font-bold text-black">Welcome to our website</h2>
        <p className=" mx-96 text-2xl font-semibold hover:text-green-600">Explore our festival lineup featuring a diverse range of artists and performers from various genres.Secure your tickets online for a seamless festival experience with our user-friendly booking platform.Stay updated with real-time event schedules and venue maps on our festival management website.Discover exciting food vendors and interactive activities through our festival guide section.Connect with fellow festival-goers and share your experiences on our community forum for a vibrant online celebration</p>
      </div>
      <div>
        <h3 className=" mx-96 my-20 text-5xl font-bold text-black">Events</h3>
      </div>
      <div className=" grid grid-cols-3 gap-4">
        
      </div>
    </>
  )
}
export default Navbar