export const setAuthToken = user => {
    console.log("Check user info:", user);
    // console.log(`${process.env.REACT_APP_API_URL}`);
    // const currentUser = {
    //     email: user.email,
    // }

    //   Save user in db & get token
    fetch(`https://easy-buy-server-eight.vercel.app/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //Save token in LocalStorage
            localStorage.setItem('easyBuy-token', data.token)
        })
}
