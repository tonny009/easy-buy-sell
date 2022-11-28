import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { getReportedProducts } from '../../Api/productsapi';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReportedProRow from './ReportedProRow';

const ReportedProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const data = getReportedProducts();
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

    return (
        <div className="overflow-x-auto w-full mt-10 mb-10">

            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Seller Name</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(product => <ReportedProRow
                            key={product._id} handleDelete={handleDelete} refetch={refetch} eachproduct={product}>

                        </ReportedProRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ReportedProducts;