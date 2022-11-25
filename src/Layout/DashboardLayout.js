import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getRole } from '../Api/userApi';
import { AuthContext } from '../Contexts/AuthProvider';
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user, role, setRole } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    const sellerList = <>
        <li className='font-semibold'><Link to="/dashboard/addproduct">Add Product</Link></li>
        <li className='font-semibold'><Link to="/dashboard">My Products</Link></li>
    </>
    const buyerList = <>
        <li className='font-semibold'><Link to="/">My Orders</Link></li>
        {/* <li className='font-semibold'><Link to="/">Become Seller</Link></li> */}
    </>
    const adminList = <>
        <li className='font-semibold'><Link to="/dashboard/allSellers">All Sellers</Link></li>
        <li className='font-semibold'><Link to="/dashboard/allBuyers">All Buyers</Link></li>
        <li className='font-semibold'><Link to="/">Reported Items</Link></li>
    </>



    useEffect(() => {
        setLoading(true)
        getRole(user?.email).then(data => {
            setRole(data)
            setLoading(false)
        })
    }, [user])

    return (
        <div>
            <Header></Header>
            <div className='relative min-h-screen md:flex'>

                {loading ? (
                    ''
                ) : (
                    <>
                        <div className="drawer drawer-mobile">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <Outlet></Outlet>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                <div className="avatar ">

                                    <ul className="menu p-4 w-80 bg-base-400 text-base-content">
                                        <div className="w-24 mask mask-squircle ml-4">
                                            <img src={user?.photoURL} />
                                        </div>
                                        {/* <!-- Sidebar content here --> */}
                                        {role && role !== 'admin' ? (
                                            <>{role === 'buyer' ? buyerList : sellerList} </>
                                        ) : (
                                            adminList
                                        )}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
};

export default DashboardLayout;