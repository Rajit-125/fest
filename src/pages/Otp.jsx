
function Otp(){
    return(
        <>
        <div className=" w-full h-[100vh] flex flex-col flex-1 items-center justify-center bg-[url('./assets/OMG.jpg')] bg-cover">
        <form id='login-form' method='POST'>
       <div className=" flex items-center text-4xl text-red-500"> <label htmlFor="otp">Plese enter an OTP</label> </div>
       <div className=" my-5 flex items-center text-3xl"> <input otp number="otp" placeholder='Enter here...' type='text'/> </div>
       <div className=" mx-28 my-10 w-24 flex items-center text-3xl bg-violet-600 hover:text-red-400 px-1 rounded-xl"> <button type='submit'>LOGIN</button></div>
        </form>
        </div>
        </>
    )
}
export default Otp