import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from "../page/Navbar";
import Registration from "../page/Registration";
import Rstudents from "../page/Rstudents";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Navbar/>,
        },
        {
            path:"/registration",
            element:<Registration/>
        },
        {
            path:"/rstudents",
            element:<Rstudents/>
        },
    ],
)
export { router}