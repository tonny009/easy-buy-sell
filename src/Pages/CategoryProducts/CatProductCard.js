import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getBookedProduct, handleReport } from '../../Api/productsapi';
import { getSellerStatus } from '../../Api/userApi';
import BookingModal from '../BookingModals/BookingModal';

const CatProductCard = ({ product }) => {

    // const [isBooked, setIsbooked] = useState()
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(true)
    const { image, productName, description, purchaseYear, price, condition, isBooked, _id } = product


    //checking seller verified or not--------
    useEffect(() => {
        getSellerStatus(product.email).then(data => {
            setStatus(data)
            setLoading(false)
        })
    }, [product])

    return (
        <div className="card lg:card-side h-auto bg-base-200 shadow-xl mt-5 pl-5 ml-2 ">
            <figure><img className='w-64 rounded-lg h-60 pl-4' src={product.image} alt="Album" /></figure>

            {/* <figure><img className='w-44 rounded-lg h-60 pl-4' src={img} alt="Album" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{product.productName} </h2>
                <p>
                    {
                        product?.description?.length > 100 ?
                            <p className='text-left'>{product.description.slice(0, 100) + '...'}</p>
                            :
                            <p>{product.description}</p>
                    }
                </p>
                <p><strong>Purchased:  {product.purchaseYear}</strong></p>
                <p><strong>Price: ${product.price}</strong></p>
                <p> <strong>Condition: {product.condition}</strong></p>
                <p> <strong>Location: {product.location}</strong></p>
                <p> <strong>Seller Name: {product.sellerName}</strong>
                    {
                        status === '1' && (<div className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-success">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg><h5 className='text-success font-bold'>(Verified Seller)</h5></div>)
                    }

                </p>
                <p> <strong>Post Date: {product.date}</strong></p>
                <div className='flex' >
                    <div className="card-actions justify-end mr-5">
                        <label
                            disabled={isBooked}
                            htmlFor="booking-modal"
                            className="btn btn-colors text-white"
                        >{isBooked && 'Booked' || !isBooked && 'Book Now!'}</label>
                    </div>
                    <div className="card-actions justify-end">
                        {
                            product.report && product.report === '1' && (<button disabled className="btn btn-danger">Report</button>)
                            ||
                            !product.report && (<button onClick={() => handleReport(product._id)} className="btn btn-danger">Report</button>)
                        }

                    </div>

                </div>
                {
                    !isBooked && <BookingModal product={product}></BookingModal>
                    // productAgain.isBooked && <BookingModal product={product}></BookingModal>

                }



            </div>
        </div>
    );
};

export default CatProductCard;