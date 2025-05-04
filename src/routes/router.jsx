import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/bills',
                Component: Bills,
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                // hydrateFallbackElement: <Loading></Loading>,
                Component: Register
            },
            {
                path: '/*',
                Component: ErrorPage

            }
        ]
    }
])

export default router;