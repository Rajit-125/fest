import { Link } from "react-router-dom"

function Profile() {
    return (
        <>
            <div>
                <div className=" mx-96 text-6xl flex items-center py-96 px-52 font-bold text-black bg-[url('./assets/QR-CODE.jpg')] bg-contain bg-no-repeat">
                    SCAN HERE
                </div>
                <div>
                    <Link to="/login" className=" mx-96 flex items-center text-7xl bg-violet-600 w-60 h-32 px-1 rounded-3xl">
                        <button>Logout</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Profile