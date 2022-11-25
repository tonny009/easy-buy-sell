import React from 'react';
import './myproduct.css'
const ProductRow = ({ eachproduct, handleAvailable, handleSold, refetch }) => {
    const { _id, productName, price, photoURL, status, handleDelete } = eachproduct
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
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
                    status && status === 'Available' && status !== 'Sold'(<button onClick={() => handleSold(eachproduct)} className='btn btn-ghost availableBtn'>Sold</button>)
                    || !status && (<button onClick={() => handleSold(eachproduct)} className='btn btn-ghost availableBtn'>Sold</button>)
                }
                <br></br>
                <span className="badge badge-ghost badge-sm text-blue-800">{status ? <p>Product is - {status}</p> : ""}</span>
            </td>
            {/* <td>
                {
                    // status
                    role && role !== 'admin' && status === '0' && (<button onClick={() => handleStatus(eachSeller)} className='btn btn-ghost'>Please Verify</button>)
                    || (role && role !== 'admin' && status === '1' && (<p className='text-success '>Verified</p>))
                }


            </td> */}
            <td>
                {
                    eachproduct && (<button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>)
                }
            </td>

        </tr>
    );
};

export default ProductRow;