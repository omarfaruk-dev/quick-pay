import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
                path: '/*',
                Component: ErrorPage

            }
        ]
    }
])

export default router;