export const addProduct = async productData => {
    const response = await fetch(`https://easy-buy-server-eight.vercel.app/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(productData),
    })

    const data = await response.json()
    return data
}

//get all advertised products------
export const getAdvertise = async () => {
    const adv = '1'
    const response = await fetch(`https://easy-buy-server-eight.vercel.app/products?advertise=${adv}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
        },
    })
    const products = await response.json()
    // console.log(products);
    return products

}

// get all reported products----------
export const getReportedProducts = async () => {
    const report = '1'
    const response = await fetch(`https://easy-buy-server-eight.vercel.app/reportproducts?report=${report}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
        },
    })
    const products = await response.json()
    // console.log(products);
    return products

}



// get filtered seller products ---------
export const getSellerProducts = async email => {
    const response = await fetch(
        `https://easy-buy-server-eight.vercel.app/products/${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
            },
        }
    )
    const products = await response.json()
    // console.log(user.role);
    return products
}
export const getOrderProducts = async email => {
    const response = await fetch(
        `https://easy-buy-server-eight.vercel.app/bookings?email=${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
            },
        }
    )
    const bookings = await response.json()
    console.log(bookings);
    return bookings
}

export const handleReport = (id) => {
    const productData = { report: '1' }
    fetch(`https://easy-buy-server-eight.vercel.app/product/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        // body: JSON.stringify({ ...product, status: 'Sold' }),
        body: JSON.stringify(productData),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged === true) {
                // refetch();
                alert("Reported------")
                // toast.success(` User deleted successfully`)
            }
        })
        .catch(err => console.log('The error is :', err))
}

//add product booked or not status---------
export const updateBookingStatus = async id => {
    const productData = { isBooked: '1' }
    fetch(`https://easy-buy-server-eight.vercel.app/product/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged === true) {
                console.log("Product booking status added-------------------------------");
                // toast.success(` User deleted successfully`)
            }
        })
        .catch(err => console.log('The adding booking status error is :', err))
}


// get booked products--------

export const getBookedProduct = async (id) => {
    console.log('In function inserted');

    const response = await fetch(`https://easy-buy-server-eight.vercel.app/singleproduct/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('easyBuy-token')}`,
        },
    })
    const products = await response.json()
    console.log(products);
    return products

}