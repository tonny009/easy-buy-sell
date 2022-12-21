import React from 'react';
import './myproduct.css'
const ProductRow = ({ eachproduct, handleAvailable, handleDelete, handleSold, refetch, handleAdvertise }) => {
    const { _id, productName, price, image, status, advertise } = eachproduct
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
                        {/* <div className="text-sm opacity-50">Took Service: ({serviceName})</div> */}

                    </div>
                </div>
            </td>
            <td>
                {price}
                {/* <p>{date}</p> */}

            </td>
            <td>
                {
                    status && status === 'Available' && status !== 'Sold' && (<button onClick={() => handleSold(_id)} className='btn btn-success font-semibold option-font'>Sold</button>)
                    || !status && (<button onClick={() => handleSold(_id)} className='btn btn-success font-semibold option-font'>Sold</button>)
                }
                <br></br>
                <span className="badge badge-ghost badge-sm text-blue-800">{status ? <p className='p-4 font-serif'>Product is - {status}</p> : ""}</span>
            </td>

            <td>
                {
                    advertise === '0' && status === 'Available' && (<button onClick={() => handleAdvertise(_id)} className='btn btn-success text-center option-font'>Click To Advertise</button>)
                    || advertise === '1' && (<p className='text-neutral text-center font-semibold'>Advertised</p>) || !advertise && (<button onClick={() => handleAdvertise(_id)} className='btn btn-'>Click To Advertise</button>)
                }
            </td>
            <td>
                {
                    eachproduct && (<button onClick={() => handleDelete(_id)} className='btn btn-error option-font'>Remove</button>)
                }
            </td>

        </tr>
    );
};

export default ProductRow;