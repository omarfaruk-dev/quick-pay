import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/MyBills";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import BillDetails from "../pages/Bills/BillDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/ui/Loading";


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
                hydrateFallbackElement: <Loading />,
                loader: () => fetch('../bills.json'),
                element: <PrivateRoute> <Bills /></PrivateRoute>
            },
            {
                path: '/bills/:id',
                loader: () => fetch('../bills.json'),
                Component: BillDetails,
            },
            {
                path: '/profile',
                hydrateFallbackElement: <Loading />,
                element: <PrivateRoute> <Profile /> </PrivateRoute>
            },
            {
                path: '/login',
                hydrateFallbackElement: <Loading />,
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