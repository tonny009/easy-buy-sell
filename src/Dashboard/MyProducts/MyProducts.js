import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { getSellerProducts } from '../../Api/productsapi';
import { AuthContext } from '../../Contexts/AuthProvider';
import ProductRow from './ProductRow';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const data = getSellerProducts(user.email);
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this product?');
        if (proceed) {
            fetch(`http://localhost:5001/product/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('easyBuy-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        // toast.success(` User deleted successfully`)
                    }
                })
        }

    }

    const handleAvailable = () => {
        console.log('Yes available');

    }
    const handleSold = (product) => {

        const productData = { status: 'Sold' }
        console.log(productData);
        delete user._id
        fetch(`http://localhost:5001/product/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('easyBuy-token')}`
            },
            // body: JSON.stringify({ ...product, status: 'Sold' }),
            body: JSON.stringify(productData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    refetch();
                    // toast.success(` User deleted successfully`)
                }
            })

    }



    return (
        <div className="overflow-x-auto w-full mt-10 mb-10">

            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Price</th>
                        <th>Avaibility</th>
                        <th>Advertise Product</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(product => <ProductRow
                            key={product._id} handleDelete={handleDelete} handleAvailable={handleAvailable} handleSold={handleSold} refetch={refetch} eachproduct={product}>

                        </ProductRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyProducts;