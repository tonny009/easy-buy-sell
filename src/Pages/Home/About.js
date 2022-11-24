import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse pt-2">
                <div className='w-2/2 max-w-sm '>
                    <img src='https://media.wired.co.uk/photos/606d9b777aff197af7c72a87/master/w_1600%2Cc_limit/wired-recyclephone.jpg' alt='' className="max-w-sm rounded-lg shadow-2xl" />
                </div>

                <div className='w-1/2 mr-6 '>
                    <h1 className="text-5xl font-bold">About Our Service</h1>
                    <p className="py-6">First and foremost it is our desire to create a dream memory for you which helps you look your very best and also which gently makes an expression of your character and personality. All of us here will spare no effort or expense to totally please you. We truly want to create the finest portrait; for you.
                        Careful planning is one of the main differences which separates the work of our studio from that of other photographers. We spend time with you before, during, and after the photography; planning everything to help you learn what clothing is most complementary, how to use make-up most effectively, and what time of day is best for your portrait and focuses to be created. These are the factors, which combine to make your pictures truly outstanding! Our clients find this planning time very helpful.We provide different kinds of photography packages and photography training.</p>

                </div>
            </div>
        </div>
    );
};

export default About;