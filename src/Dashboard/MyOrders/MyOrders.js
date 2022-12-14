import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { getOrderProducts } from '../../Api/productsapi';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loading from '../../Pages/Shared/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    useTitle('My Orders')
    const { user } = useContext(AuthContext)
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const data = getOrderProducts(user?.email);
                return data;
            }
            catch (error) {

            }
        }
    });
    if (isLoading) {
        <Loading></Loading>
    }

    const handleDelete = () => {
        console.log('Delete Pressed');
    }
    return (
        <div className="overflow-x-auto w-full mt-10 mb-10">

            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(product => <OrderRow
                            key={product._id} handleDelete={handleDelete} refetch={refetch} eachproduct={product}>

                        </OrderRow>)
                    }
                </tbody>

            </table>
        </div >
    );
};

export default MyOrders;