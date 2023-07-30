
function Otp(){
    return(
        <>
        <div className="otp">
        <form id='login-form' method='POST'>
        <label htmlFor="otp">Plese enter an OTP</label> 
        <input phone number="otp" placeholder='Enter here...' type='text'/> 
        <button type='submit'>LOGIN</button>
        </form>
        </div>
        </>
    )
}
export default Otp