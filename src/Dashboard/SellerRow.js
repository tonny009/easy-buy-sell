import React from 'react';

const SellerRow = ({ eachSeller, handleDelete, handleStatus, refetch }) => {
    const { _id, email, name, role, photoURL, status } = eachSeller
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
                        <div className="font-bold">{name}</div>
                        {/* <div className="text-sm opacity-50">Took Service: ({serviceName})</div> */}

                    </div>
                </div>
            </td>
            <td>
                {email}
                {/* <p>{date}</p> */}

            </td>
            <td>
                {role}
                {/* <p>{date}</p> */}

            </td>
            <td>
                {
                    // status
                    role && role !== 'admin' && status === '0' && (<button onClick={() => handleStatus(eachSeller)} className='btn btn-ghost'>Please Verify</button>)
                    || (role && role !== 'admin' && status === '1' && (<p className='text-success '>Verified</p>))
                }


            </td>
            <td>
                {
                    role && role !== 'admin' && (<button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>)
                }

                {/* <button className='btn btn-ghost'><Link to={`/update/${_id}`}>Edit</Link></button> */}
            </td>

        </tr>
    );
};

export default SellerRow;