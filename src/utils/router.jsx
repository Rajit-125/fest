import {
    createBrowserRouter,
} from "react-router-dom";
import Admin from "../page/admin";


const router=createBrowserRouter(
    [
        {
            path:"/admin",
            element:<Admin/>,
        },
    ],
)
export { router}