import { createBrowserRouter } from "react-router-dom";
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
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Checkout from "../Pages/CheckOut/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5001/categories`)
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5001/categories`)
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
                path: '/register',
                element: <Signup></Signup>
            },
            {
                path: '/checkOut',
                element: <Checkout></Checkout>
            },
            {
                path: '/category/:id',
                element: <CategoryProducts></CategoryProducts>,
                loader: ({ params }) => fetch(`http://localhost:5001/products?category=${params.id}`)
            },
            {
                path: '*',
                element: <div className='not-found w-75 h-25 container'>Sorry ! This page is not found(404)</div>
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
                element: <AddProducts></AddProducts>,
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>,
            }
            ,
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>,
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>,
            },
            {
                path: '/dashboard/reported',
                element: <ReportedProducts></ReportedProducts>,
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5001/bookings/${params.id}`)
            }

        ]
    }
])