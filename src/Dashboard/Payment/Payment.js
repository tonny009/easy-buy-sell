import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const data = useLoaderData();
    const { buyerName, price, productName } = data
    return (
        <div>
            <h3>Payment for : {productName}</h3>
            <p className='text-xl'>Please pay <strong>{price}</strong> to buy </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        orders={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;