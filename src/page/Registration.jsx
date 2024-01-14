import { useState } from "react";


function Registration() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [usn, setUsn] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [event,setEvent]=useState("")
    const [year,setYear]=useState("")
    const [branch,setBranch]=useState("")

    const handleOneSubmit = async (e) => {
    }

    return (
        <>
            <div className=" bg-[url('./assets/signup.jpg')] bg-cover flex flex-col">
                <div className=" my-20 mx-52 w-48 px-2 py-2 text-6xl font-bold text-white">
                    Registration Form
                </div>
                <form
                    id="student-register-form"
                    action="/registration"
                    method="post"
                    onSubmit={handleOneSubmit}
                >
                    <div className=" mx-40">
                        <h1 className=" mx-5 text-2xl font-bold text-white">Name</h1>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="enter name..."
                        />
                        <h1 className=" mx-5 text-2xl font-bold text-white">Email</h1>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            placeholder="enter email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h2 className=" mx-5 my-1 text-2xl font-bold text-white">
                            event
                        </h2>
                        <select id="mySelect" value={event} onChange={(e)=>setEvent(e.target.value)} className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5">
                            <option value="">Select an event</option>
                            <option value="section1">Hackthan</option>
                            <option value="section2">Painting</option>
                            <option value="section3">Quiz</option>
                            <option value="section4">Classical Dance</option>
                            <option value="section5">Fashion Show</option>
                            <option value="section6">Singing</option>
                        </select>
                        <h3 className=" mx-5 my-1 text-2xl font-bold text-white">Year</h3>
                        <select id="mySelect" value={year} onChange={(e)=>setYear(e.target.value)} className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5">
                            <option value="">Select a year</option>
                            <option value="section1">1</option>
                            <option value="section2">2</option>
                            <option value="section3">3</option>
                            <option value="section4">4</option>
                        </select>
                        <h3 className=" mx-5 my-1 text-2xl font-bold text-white">Branch</h3>
                        <select id="mySelect" value={branch} onChange={(e)=>setBranch(e.target.value)} className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5">
                            <option value="">Select a branch</option>
                            <option value="section1">Arospace Engineering</option>
                            <option value="section2">ISE</option>
                            <option value="section3">CSE</option>
                            <option value="section4">AIML</option>
                            <option value="section5">Chemical Engineering</option>
                            <option value="section6">ECE</option>
                            <option value="section7">ET</option>
                            <option value="section8">EEE</option>
                        </select>
                        <h4 className=" mx-5 my-1 text-2xl font-bold text-white">Usn</h4>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            value={usn}
                            onChange={(e) => setUsn(e.target.value)}
                            placeholder="enter usn..."
                        />
                        <h5 className=" mx-5 my-1 text-2xl font-bold text-white">
                            Mobile Number
                        </h5>
                        <input
                            className=" mx-3 my-1 w-80 text-xl rounded-xl font-bold px-5"
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="enter number..."
                        />
                    </div>
                    <div>
                        <button
                            className=" mx-52 my-10 text-5xl font-bold text-white bg-blue-500 px-2 py-2 rounded-2xl hover:bg-red-500 hover:text-black"
                            type="submit"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Registration
