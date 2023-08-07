

function LoginPage() {

  return (
    <>
    <div className=" w-full h-[100vh] flex flex-col flex-1 items-center justify-center bg-[url('./assets/rest.jpg')] bg-cover">
    <div>
      <h1 className=" my-10 flex text-6xl text-cyan-50">wellcome❤️❤️</h1>
    </div>
    <div className=" flex items-center ">
      <form id='login-form' method='POST'>
     <div className=" flex items-center text-4xl text-red-500"> <label htmlFor="phone number">Plese enter a Phone Number</label> </div>
     <div className=" my-5 flex items-center text-3xl"> <input phone number="phone number" placeholder='Enter here...' type='text'/> </div>
     <div className=" mx-28 my-10 w-24 flex items-center text-3xl bg-violet-600 hover:text-red-400 px-1 rounded-xl"> <button type='submit'>LOGIN</button></div>
      </form>
    </div>
    </div>
    </>
  )
}

export default LoginPage
