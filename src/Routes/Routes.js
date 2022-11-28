import { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import AddProducts from "../Dashboard/Addproduct/AddProducts";
import AllBuyers from "../Dashboard/AllBuyers";
import AllSellers from "../Dashboard/AllSellers";
import MyOrders from "../Dashboard/MyOrders/MyOrders";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
import Payment from "../Dashboard/Payment/Payment";
import ReportedProducts from "../Dashboard/ReportedProducts/ReportedProducts";
import Welcome from "../Dashboard/Welcome/Welcome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Checkout from "../Pages/CheckOut/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Page404 from "../Pages/Shared/Page404";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import BuyersRoute from "./BuyersRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const routes = createBrowserRouter([
    // const { user } = useContext(AuthContext)
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://easy-buy-server-eight.vercel.app/categories`)
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch(`https://easy-buy-server-eight.vercel.app/categories`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Signup></Signup>,
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://easy-buy-server-eight.vercel.app/catproducts?category=${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '*',
                element: <div className='not-found w-75 h-25 container'><Page404></Page404></div>
            }
        ]
    },
    {
        path: '/dashboard',
        // errorElement: <ErrorPage />,
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>,
                // element: <AddProducts></AddProducts>,
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>,
            }
            ,
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>,
                // element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>,
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyersRoute><MyOrders></MyOrders></BuyersRoute>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://easy-buy-server-eight.vercel.app/bookings/${params.id}`)
            }

        ]
    }
])