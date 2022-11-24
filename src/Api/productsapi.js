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