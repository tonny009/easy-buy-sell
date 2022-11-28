export const getRole = async email => {
    console.log(email);
    const response = await fetch(
        `https://easy-buy-server-eight.vercel.app/user/${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
            },
        }
    )
    const user = await response.json()
    console.log(user.role);
    return user?.role
}

export const getSellerStatus = async email => {
    const response = await fetch(
        `https://easy-buy-server-eight.vercel.app/userStatus/${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
            },
        }
    )
    const user = await response.json()
    // console.log(user.email);
    return user?.status
}


// Get all Users ----------
export const getAllUsers = async () => {
    const response = await fetch(`https://easy-buy-server-eight.vercel.app/users`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
        },
    })
    // console.log('test')
    const users = await response.json()

    return users
}

// get type wise users (seller/buyer)-----------
export const getDifCatUsers = async (user_type) => {
    console.log(user_type);
    const response = await fetch(`https://easy-buy-server-eight.vercel.app/users?role=${user_type}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
        },
    })
    const users = await response.json()
    return users
}

// Verify status change for User from admin dashboard---------
export const verifySeller = async user => {
    delete user._id
    const response = await fetch(
        `https://easy-buy-server-eight.vercel.app/userupdate/${user?.email}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
            },
            body: JSON.stringify({ ...user, status: '1' }),
        }
    )
    const users = await response.json()
    return users
}