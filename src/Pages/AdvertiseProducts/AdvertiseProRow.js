// Same  is CatProductCard 


// import React, { useContext, useEffect, useState } from 'react';
// import { getSellerStatus } from '../../Api/userApi';
// import { AuthContext } from '../../Contexts/AuthProvider';

// const AdvertiseProRow = ({ product }) => {
//     const { user } = useContext(AuthContext)
//     const [status, setStatus] = useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         getSellerStatus(product.email).then(data => {
//             setStatus(data)
//             setLoading(false)
//         })
//     }, [product])
//     return (
//         <div className="card lg:card-side h-auto  bg-base-100 shadow-xl mt-5 pl-5">
//             <figure><img className='w-64 rounded-lg h-60 pl-4' src={product.image} alt="Album" /></figure>
//             {/* {console.log(product.email)} */}

//             {/* <figure><img className='w-44 rounded-lg h-60 pl-4' src={img} alt="Album" /></figure> */}
//             <div className="card-body">
//                 <h2 className="card-title">{product.productName} </h2>
//                 <p>
//                     {
//                         product?.description?.length > 100 ?
//                             <p className='text-left'>{product.description.slice(0, 100) + '...'}</p>
//                             :
//                             <p>{product.description}</p>
//                     }
//                 </p>
//                 <p><strong>Purchased:  {product.purchaseYear} days</strong></p>
//                 <p><strong>Price: ${product.price}</strong></p>
//                 <p> <strong>Condition: {product.condition}</strong></p>
//                 <p> <strong>Location: {product.location}</strong></p>
//                 <p> <strong>Seller Name: {product.sellerName}</strong>
//                     {
//                         status === '1' && (<><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-success">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                         </svg><h5 className='text-success font-bold'>(Verified Seller)</h5></>)
//                     }

//                 </p>
//                 <p> <strong>Post Date: {product.date}</strong></p>
//                 <div className="card-actions justify-end">
//                     {/* <button className="btn btn-primary"><Link to={`/servicedetails/${_id}`}>View Details</Link></button> */}
//                     <button className="btn btn-primary">Book Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdvertiseProRow;