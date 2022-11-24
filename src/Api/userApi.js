export const getRole = async email => {
    const response = await fetch(
        `http://localhost:5001/user/${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
            },
        }
    )
    const user = await response.json()
    console.log(user.role);
    return user?.role
}