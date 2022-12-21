import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { getAdvertise } from '../../Api/productsapi';
import { AuthContext } from '../../Contexts/AuthProvider';
import CatProductCard from '../CategoryProducts/CatProductCard';
import Loading from '../Shared/Loading';
import AdvertiseProRow from './AdvertiseProRow';

const AdvertiseProduct = () => {

    const { user } = useContext(AuthContext)


    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const data = await getAdvertise(user?.email);
                return data;
            }
            catch (error) {

            }
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5'>
                {
                    products?.map(product => <CatProductCard
                        key={products._id} product={product}>
                    </CatProductCard>)
                }
            </div>
        </div >
    );
};

export default AdvertiseProduct;