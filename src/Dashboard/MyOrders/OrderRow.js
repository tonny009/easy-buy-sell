import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ eachproduct, handleDelete, refetch }) => {
    const { _id, bookingDate, price, productName, image, paid } = eachproduct
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>
                {
                    price && !eachproduct.paid && (<Link to={`/dashboard/payment/${_id}`}><button className='btn btn-success text-center option-font'>Pay</button></Link>)
                }
                {
                    price && eachproduct.paid && <span className='text-primary'>Paid</span>
                }
                <br></br>
            </td>
        </tr>
    );
};

export default OrderRow;