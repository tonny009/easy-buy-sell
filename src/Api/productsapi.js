export const addProduct = async productData => {
    const response = await fetch(`http://localhost:5001/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
        body: JSON.stringify(productData),
    })

    const data = await response.json()
    return data
}


// get filtered seller products ---------
export const getSellerProducts = async email => {
    const response = await fetch(
        `http://localhost:5001/products/${email}`,
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