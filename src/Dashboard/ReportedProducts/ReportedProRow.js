import React from 'react';

const ReportedProRow = ({ eachproduct, handleDelete, refetch }) => {
    const { _id, productName, price, image, sellerName, status, advertise } = eachproduct
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
                {sellerName}
                {/* <p>{date}</p> */}

            </td>


            <td>
                {
                    eachproduct && (<button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>)
                }
            </td>

        </tr>
    );
};

export default ReportedProRow;