import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Pages/Shared/Loading';
import { getRole } from '../Api/userApi'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [roleLoading, setRoleLoading] = useState(true)
    useEffect(() => {
        setRoleLoading(true)
        getRole(user?.email).then(data => {
            setRole(data)
            console.log(role, user);
            setRoleLoading(false)
        })
    }, [user?.email])

    if (loading || roleLoading) {
        return (
            <div className='h-screen'>
                <Loading></Loading>
            </div>
        )
    }
    if (user && user.uid && role === 'admin') {
        return children
    }
    else {
        toast.error('You dont have permission to visit the route')
        return <Navigate to='/dashboard' />
    }


};

export default AdminRoute;