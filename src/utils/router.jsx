import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../page/Navbar";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Navbar/>,
        },
    ],
)
export { router}