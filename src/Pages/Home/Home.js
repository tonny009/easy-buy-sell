import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* About ------ */}
            <About></About>

            {/* Mobile Categories-------- */}
            <div className='w-full bg-base-200 mb-8 pb-5 pt-5 mx-auto'>
                <h2 className='text-center font-extrabold text-3xl'>Our Services</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2'>
                    {
                        categories?.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                    }
                </div>
                <div className='text-center mt-8'>
                    <button className="btn btn-primary"><Link to='/services'>View All Services</Link></button>
                </div>


            </div>

        </div >
    );
};

export default Home;