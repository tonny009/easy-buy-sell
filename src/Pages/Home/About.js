import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-8 mt-8">
            <div className="hero-content flex-col lg:flex-row-reverse pt-0.5">
                <div className='w-2/2 max-w-sm '>
                    <img src='https://media.wired.co.uk/photos/606d9b777aff197af7c72a87/master/w_1600%2Cc_limit/wired-recyclephone.jpg' alt='' className="max-w-sm rounded-lg shadow-2xl" />
                </div>

                <div className='w-1/2 mr-6 '>
                    <h1 className="text-5xl font-bold">About Our Service</h1>
                    <p className="py-4">Easy Buy & Sell strives to be a responsible global citizen and promote sustainability for our partners and within our business practices. We actively work to minimize our mobile products' long-term impact on the environment by offering recycling and trade-in opportunities for old units and encouraging our customers to take advantage of these programs. By working together, we can do our part to mitigate global climate change while also ensuring access to top-of-the-line, efficient data capture solutions.This platform is super friendly for sellers and buyers both.</p>

                </div>
            </div>
        </div>
    );
};

export default About;