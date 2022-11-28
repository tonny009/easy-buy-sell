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
            fetch(`https://easy-buy-server-eight.vercel.app/product/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',

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
                .catch(err => console.log('The error is :', err))
        }

    }

    const handleSold = (id) => {

        const productData = { status: 'Sold', advertise: '0' }
        fetch(`https://easy-buy-server-eight.vercel.app/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('easyBuy-token')}`
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
            .catch(err => console.log('The error is :', err))

    }

    const handleAdvertise = (id) => {
        const productData = { advertise: '1' }
        fetch(`https://easy-buy-server-eight.vercel.app/product/${id}`, {
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
            .catch(err => console.log('The error is :', err))
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
                            key={product._id} handleDelete={handleDelete} handleAdvertise={handleAdvertise} handleSold={handleSold} refetch={refetch} eachproduct={product}>

                        </ProductRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyProducts;