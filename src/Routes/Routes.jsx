import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import EventRegister from "../components/EventRegister/EventRegister";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Volunteers from "../components/Volunteers/Volunteers";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../shared/ErrorPage";
import CreateEvents from "../components/CreateEvents/CreateEvents";
import MyEvents from "../components/MyEvents/MyEvents";
import Blog from "../components/Blog/Blog";
import Donation from "../components/Donation/Donation";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/event-register",
                element: <EventRegister />,
            },
            {
                path: "/event-register/:id",
                element: <EventRegister />,
                loader: () => fetch('http://localhost:5000/all-events')
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
            {
                path: "/volunteers",
                element: <PrivateRoutes><Volunteers /></PrivateRoutes>,
            },
            {
                path: "/create-events",
                element: <PrivateRoutes><CreateEvents /></PrivateRoutes>,
            },
            {
                path: "/my-events",
                element: <MyEvents />,
            },
            {
                path: "/blogs",
                element: <Blog />,
            },
            {
                path: "/donation",
                element: <Donation />,
            },
        ]
    },
]);

export default router;