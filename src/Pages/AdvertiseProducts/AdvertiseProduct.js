import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAdvertise } from '../../Api/productsapi';
import CatProductCard from '../CategoryProducts/CatProductCard';
import AdvertiseProRow from './AdvertiseProRow';

const AdvertiseProduct = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const data = getAdvertise();
                return data;
            }
            catch (error) {

            }
        }
    });
    // console.log(products);
    return (
        <div>
            {/* <h2 className='text-center font-extrabold text-3xl'>AdverTise Products</h2> */}
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5'>
                {
                    // console.log(products)
                    products?.map(product => <CatProductCard
                        key={products._id} product={product}>
                    </CatProductCard>)
                }
            </div>
        </div >
    );
};

export default AdvertiseProduct;