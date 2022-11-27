import React, { useContext, useEffect, useState } from 'react';
import { getRole } from '../Api/userApi';

import Loading from '../Pages/Shared/Loading';
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { AuthContext } from '../Contexts/AuthProvider';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log('This is from seller route:', user);
    const [role, setRole] = useState(null)
    const [roleLoading, setRoleLoading] = useState(true)
    console.log(user.email);
    // if (!user) {
    //     return
    // }
    useEffect(() => {
        setRoleLoading(true)

        getRole(user?.email).then(data => {
            console.log(role);
            setRole(data)
            setRoleLoading(false)
        })
    }, [user])


    if (loading || roleLoading) {
        return (
            <div className='h-screen'>
                <Loading></Loading>
            </div>
        )
    }
    if (user && user.uid && role === 'seller') {
        return children
    }
    else {
        toast.error('Sorry... This is seller route')
        return <Navigate to='/dashboard' />
    }

};

export default SellerRoute;