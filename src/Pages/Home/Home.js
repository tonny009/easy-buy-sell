import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AdvertiseProduct from '../AdvertiseProducts/AdvertiseProduct';
import About from './About';
import CategoryCard from './CategoryCard';
import './home.css'
const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (

        <div className='rounded-xl '>
            {/* banner */}
            <div className="hero h-96 banner-img " >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Shop!</h1>
                        <p className="mb-5 text-xl font-semibold option-font">Let's reuse most wanted brand mobiles at cheaper rate and also earn money by selling your old one!</p>
                    </div>
                </div>
            </div>

            {/* About ------ */}
            <About></About>

            {/* Mobile Categories-------- */}
            <div className='w-full bg-base-200 mb-8 pb-5 pt-6 mx-auto'>
                <h2 className='text-center font-extrabold text-3xl mb-7'>Available Brand Categories</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2'>
                    {
                        categories?.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                    }
                </div>



            </div>
            <div className='w-full bg-base-200 mb-8 pb-5 pt-5 mx-auto'>
                <h2 className='text-center font-extrabold text-3xl'>Advertised Mobiles</h2>
                <AdvertiseProduct></AdvertiseProduct>
            </div>

        </div >
    );
};

export default Home;