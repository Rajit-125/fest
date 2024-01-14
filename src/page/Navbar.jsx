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
        <Link to="https://en.wikipedia.org/wiki/Indian_classical_dance">
          <img src="./assets/classical.jpg" alt="classical" className=" mx-10"/>
          <h4 className=" mx-80 my-5 text-3xl font-bold text-black">Classical Dance</h4>
        </Link>
        <Link to="https://www.techtarget.com/searchcio/definition/hackathon#:~:text=A%20hackathon%2C%20also%20known%20as,build%20a%20new%20software%20program.">
          <img src="./assets/hack.jpg" alt="code" className=" mx-5"/>
          <h4 className=" mx-80 my-5 text-3xl font-bold text-black">Hackthan</h4>
        </Link>
        <Link to="https://www.britannica.com/art/painting">
          <img src="./assets/paint.jpg" alt="paint" className=" mx-10"/>
          <h4 className=" mx-80 my-5 text-3xl font-bold text-black">Painting</h4>
        </Link>
        <Link to="https://en.wikipedia.org/wiki/Fashion_show">
          <img src="./assets/fashion.jpg" alt="fashion show" className=" mx-10"/>
          <h4 className=" mx-80 my-5 text-3xl font-bold text-black">Fashion Show</h4>
        </Link>
        <Link to="https://en.wikipedia.org/wiki/Quiz">
          <img src="./assets/quiz.png" alt="quiz" className=" mx-20"/>
          <h4 className=" mx-80 my-5 text-3xl font-bold text-black">Quiz</h4>
        </Link>
        <Link to="https://en.wikipedia.org/wiki/Singing">
          <img src="./assets/sing.jpg" alt="sing" className=" mx-10"/>
          <h4 className=" mx-80 my-5 text-3xl font-bold text-black">Singing</h4>
        </Link>
      </div>
      <div className=" grid grid-cols-2 gap-4">
        <Link to="https://www.rvce.edu.in/" className=" mx-40 my-40 text-blue-400 text-5xl hover:text-black">R V College Of Engineering</Link>
        <Link to="https://www.rvce.edu.in/">
          <img src="./assets/rvce.jpg" alt="rvce" className=" mx-10 my-40"/>
        </Link>
      </div>
      <div>
        <h1 className=" mx-40 my-2 text-4xl text-black font-semibold">any question feel free to reach</h1>
        <h1 className=" mx-40 my-4 text-2xl text-black font-semibold">Rakshith V--9483846545</h1>
        <h1 className=" mx-40 my-4 text-2xl text-black font-semibold">Email-rakshithv.cs21@rvce.edu.in</h1>
      </div>
    </>
  )
}
export default Navbar