import React, { useContext, useEffect, useState } from 'react';
import { getRole } from '../Api/userApi';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Pages/Shared/Loading';
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const BuyersRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [roleLoading, setRoleLoading] = useState(true)

    useEffect(() => {
        setRoleLoading(true)
        getRole(user?.email).then(data => {
            setRole(data)
            setRoleLoading(false)
        })
    }, [user])
    console.log(role);

    if (loading || roleLoading) {
        return (
            <div className='h-screen'>
                <Loading></Loading>
            </div>
        )
    }
    if (user && user.uid && role === 'buyer') {
        return children
    }
    else {
        toast.error('Sorry... This is buyers route')
        return <Navigate to='/dashboard' />
    }
};

export default BuyersRoute;