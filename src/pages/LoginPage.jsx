

function LoginPage() {

  return (
    <>
    <div className=' w-full h-full flex items-center justify-center'>
    <div>
      <h1 className=" text-6xl  ">wellcome❤️❤️</h1>
    </div>
    {/* <img src={Logo}/> */}
    <div className=' flex items-center'>
      <form id='login-form' method='POST'>
      <label htmlFor="phone number">Plese enter a Phone Number</label> 
      <input phone number="phone number" placeholder='Enter here...' type='text'/> 
      <button type='submit'>LOGIN</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default LoginPage
