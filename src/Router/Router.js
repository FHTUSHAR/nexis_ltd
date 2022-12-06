import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup1 from "../pages/Signup1/Signup1";
import Signup2 from "../pages/Signup2/Signup2";
import Signup3 from "../pages/Signup3/Signup3";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Signup1></Signup1>
            },
            {

                path: '/sign2',
                element: <Signup2></Signup2>
            },
            {
                path: '/sign3',
                element: <Signup3></Signup3>

            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/home',
        element: <Home></Home>
    }
]);