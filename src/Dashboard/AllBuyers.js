import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAllUsers, getDifCatUsers } from '../Api/userApi';
import Loading from '../Pages/Shared/Loading';
import BuyersRow from './BuyersRow';

const AllBuyers = () => {
    // react query used alog with common api function calling--------------
    // const role='buyers'

    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const data = getDifCatUsers('buyer');
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://easy-buy-server-eight.vercel.app/users/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('easyBuy-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        // toast.success(` User deleted successfully`)
                    }
                })
        }

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto w-full mt-10 mb-10">
            {console.log('here are buyers:', buyers)}

            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Buyer Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        buyers?.map(buyer => <BuyersRow
                            key={buyer._id} handleDelete={handleDelete} refetch={refetch} eachBuyer={buyer}>
                        </BuyersRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllBuyers;