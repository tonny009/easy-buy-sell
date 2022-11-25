import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatProductCard from './CatProductCard';

const CategoryProducts = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <h2 className='text-center font-extrabold text-3xl'>For Sale</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5'>
                {
                    products?.map(product => <CatProductCard
                        key={products._id} product={product}>
                    </CatProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;