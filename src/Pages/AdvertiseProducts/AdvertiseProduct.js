import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { getAdvertise } from '../../Api/productsapi';
import { AuthContext } from '../../Contexts/AuthProvider';
import CatProductCard from '../CategoryProducts/CatProductCard';
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