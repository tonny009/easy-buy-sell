import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getAllUsers, verifySeller } from '../Api/userApi';
import Loading from '../Pages/Shared/Loading'
import SellerRow from './SellerRow';

const AllSellers = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);


    // react query used alog with common api function calling--------------

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const data = getAllUsers();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDelete = (id) => {
        console.log(' delete buttom');
    }

    const handleStatus = (user) => {
        verifySeller(user).then(data => {
            console.log(data)
            if (data.acknowledged) {
                alert('Status Updated.')
            }
            if (data.modifiedCount > 0) {
                refetch()
            }
        })

    }


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto w-full mt-10 mb-10">

            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status(verified or Not)</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map(seller => <SellerRow
                            key={seller._id} handleDelete={handleDelete} handleStatus={handleStatus} refetch={refetch} eachSeller={seller}>

                        </SellerRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllSellers;