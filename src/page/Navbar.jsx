import { Link } from "react-router-dom"
function Navbar() {

  return (
    <>
      <div className=" w-full flex justify-around text-3xl py-3 gap-2 bg-gray-400 sticky top-0 z-50">
        <img src="./assets/FBC.png" className=" mr-4" />
        <div className=" mx-4">
          <h1 className=" my-10 font-bold">Menu</h1>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-2">
        <div className=" relative">
          <img src="./assets/FBC.png" className=" absolute translate-x-[-70%] translate-y-[-50%] top-1/2 left-1/2 h-80"/>
          <img src="./assets/logo-border2.png" className=" mx-5 animate-spin-slow" />
        </div>
        <h1 className=" my-10 text-9xl font-bold text-gray-400 ">
          MAGICAL
          <h2 className=" text-8xl italic text-black ">celebrations</h2>
          <p className=" my-10 text-3xl text-black">We are a holistic event management company which curates bespoke experiences for discerning patrons bringing their dreams to reality. With a cumulative experience of over two decades in luxury event planning, we bring forth unique concepts, solid technical know-how and unbridled creativity.</p>
        </h1>
      </div>
      <div className=" grid grid-cols-2 gap-4 bg-gray-400">
        <h1 className=" mx-32 my-20 text-6xl italic">
          About Us
          <p className=" my-5 text-2xl">Founded by Farid Khan and Bhavnesh Sawhney,
            FB Celebrations curates bespoke experiences for its discerning patrons. Our body of work remains impressive across the board. The Melbourne Handover Ceremony in 2006, National Games in Hyderabad in 2002, Commonwealth Games – India in 2010, IIFA Awards from 2004-2019, 65th Filmfare Guwahati in 2020, Filmfare Achievers Night – Middle East in 2021, seeing through Jennifer Lopez and Nicole Scherzinger's performance in Hinduja Wedding in 2015 to Nidhi Dutta’s and Sonam Kapoor’s Wedding - are some of the events that stand out historically.

            We organise, create, and execute events. Our outstanding team of professionals carefully attend to the planning and management of hospitality and logistics, which is a crucial component of wedding planning. We create customised events for you in a way that is genuinely associated with our concept of "Curating Magical Experiences," adding a personalised touch to décor, design, and entertainment that is exclusive to us.</p>
        </h1>
        <div className=" bg-white grid grid-cols-2 gap-4">
          <img src="./assets/profile-1.2.jpg" alt="Farid Khan" className=" border-8 w-96 mx-20" />
          <h1 className=" italic my-32 mx-32 text-6xl ">Farid Khan</h1>
          <h2 className=" mx-32 my-32 italic text-6xl">Bhavnesh Sawhneg</h2>
          <img src="./assets/profile-2.jpg" alt="Bhavnesh Sawneg" className=" border-8 w-96" />
        </div>
      </div>
      <div className=" bg-gray-400" >
        <h1 className=" my-32 text-8xl font-bold flex justify-center ">
          celebrations
        </h1>
        <p className=" mx-96 flex font-normal text-3xl justify-center">Each experience is tailored for the couple getting married, with the host's personal preferences and brand value taken into consideration. Understanding what best symbolizes "you" is a crucial part of the ideation process. Our team collaborates with the client to provide designs and experiences that are meticulously created to leave guests speechless and clamoring for more.</p>
      </div>
      <div className=" grid grid-cols-2 gap-5 grid-rows-3 bg-gray-400">
        <h1 className=" mx-40 my-40 text-8xl italic">Social celebrations</h1>
        <img src="./assets/socailimg.jpg" className=" my-10 bg-cover w-full" />
        <img src="./assets/livecel.jpg" className=" my-10 bg-cover w-full" />
        <h2 className=" mx-40 my-40 text-8xl italic">Live celebrations</h2>
        <h3 className=" mx-40 my-40 text-8xl italic">Corporate celebrations</h3>
        <img src="./assets/corpcel.jpg" className=" bg-cover w-full" />
      </div>
      <div className=" bg-gray-400 flex justify-center">
        <h1 className=" italic text-8xl">
          Media
          <div className=" grid grid-cols-4 gap-8 my-10">
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-5xl">VOGUE</Link>
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-4xl">PINKVILLA</Link>
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-4xl">MumbaiMirror</Link>
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-4xl">mid-day</Link>
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-4xl">weddingsutra</Link>
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-4xl">The Echonomic Times</Link>
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-4xl">FEMINA</Link>
            <Link to="https://www.fbcelebrations.com/media.html" className=" text-4xl">The Indian EXPRESS</Link>
          </div>
        </h1>
      </div>
      <div className=" flex justify-around">
        <p className=" mx-64 my-40 text-2xl italic text-orange-400">The Website and its content, features and functionality, including, without limitation, information, software, text, graphics, logos, button icons, images, audio clips, video clips, data compilations and the design, selection and arrangement thereof, are the exclusive property of Farid & Bhavnesh. Farid & Bhavnesh own and control all the copyright and other intellectual property rights on our website and the material on our website and all the copyright and other intellectual property rights on our website and the material on our website are reserved and are protected by Indian and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws, and may not be used or exploited in any way without our prior written consent. In addition to the intellectual property rights mentioned above, for purposes “content” is defined as all information such as the “look and feel” of the website, data files, graphics, text, photographs, drawings, logos, images, sounds, music and video and audio files on the website.</p>
      </div>
    </>
  )
}
export default Navbar