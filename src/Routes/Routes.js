import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Dashboard/Addproduct/AddProducts";
import AllBuyers from "../Dashboard/AllBuyers";
import AllSellers from "../Dashboard/AllSellers";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
import Welcome from "../Dashboard/Welcome/Welcome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
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
                element: <Home></Home>
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
            }

        ]
    }
])