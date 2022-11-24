import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Sidebar = ({ role }) => {
    const { user, logout } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')

    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <div>

        </div>
    );
};

export default Sidebar;