import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../page/admin";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Navbar/>,
        },
    ],
)
export { router}