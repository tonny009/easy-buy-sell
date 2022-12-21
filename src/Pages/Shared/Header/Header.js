import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider';
import './Header.css'



const Header = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li className='font-semibold mr-4 nav-option rounded-xl'><Link to="/">Home</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold mr-4 nav-option rounded-xl'><Link to="/dashboard">Dashboard</Link></li>
                </>
                :
                <li className='font-semibold mr-4 nav-option rounded-xl'><Link to="/register">Sign Up</Link></li>
        }

        <li className='font-semibold nav-option mr-4 rounded-xl nav-option rounded-xl'><Link to="/blog">Blog</Link></li>

    </>

    return (
        <div className="navbar bg-clr text-white mb-2 mt-3 rounded-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 option-font">
                        {menuItems}
                    </ul>
                </div>

                <a className="btn btn-ghost normal-case text-3xl font-style"><img className="logo-img" src={logo} alt="" srcset="" />Easy Buy & Sell</a>

            </div>
            <div className="navbar-center hidden lg:flex  ">
                <ul className="menu menu-horizontal  p-0 option-font nav-hover">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <Link to="">
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '40px', marginRight: '8px' }}
                                        rounded
                                        src={user?.photoURL}
                                        data-toggle="tooltip" data-placement="top" title={user?.displayName}
                                    >
                                    </Image>
                                    : <FaUser className='user-icon' data-toggle="tooltip" data-placement="top" title={user?.displayName} ></FaUser>
                                }
                            </Link>
                            <button className='headerButton mr-4 nav-option rounded-xl' onClick={handleLogOut}>Log Out</button>


                        </>
                        :
                        <>
                            {/* <button className='headerButton'><Link className='header-btn-link' to='/login'>Login</Link></button> */}
                            {/* <a ><Link className='header-btn-link mr-4 nav-option rounded-xl' to='/login'>Login</Link></a> */}
                            <button className='headerButton mr-4 nav-option rounded-xl'><Link to='/login'>Login</Link></button>

                        </>
                }
            </div>
            <label htmlFor="my-drawer-2" tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div >
    );
};

export default Header;