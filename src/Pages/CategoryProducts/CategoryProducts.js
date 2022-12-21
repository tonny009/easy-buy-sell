import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CatProductCard from './CatProductCard';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'


const CategoryProducts = () => {


    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <h2 className='text-center font-extrabold text-3xl'>For Sale</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 mb-10'>
                {
                    products?.map(product => <CatProductCard
                        key={products._id} product={product}>
                    </CatProductCard>)
                }
            </div>
            <div className='flex-col mb-10'>
                <div className='gap-2 bg-gradient-to-r from-indigo-500 to-pink-400 w-80 p-5 justify-center items-center rounded mx-auto hover:scale-y-125'>
                    <button><a href="/" className='flex gap-2 pl-8 text-xl'>
                        <span>
                            <BsFillArrowLeftSquareFill size={25} className="ml-1" />
                        </span>Back To HomePage</a></button>

                </div>
            </div>

        </div>
    );
};

export default CategoryProducts;