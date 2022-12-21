import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { updateBookingStatus } from '../../Api/productsapi';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ product }) => {
    const navigate = useNavigate()
    const date = format(new Date(), 'yyyy-MM-dd')
    const { user } = useContext(AuthContext)
    const { image, productName, description, purchaseYear, price, condition, _id } = product


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const meetLocation = form.location.value;
        const buyerphone = form.phone.value;
        // // [3, 4, 5].map((value, i) => console.log(value))
        const bookingData = {
            bookingDate: date,
            productName,
            buyerName,
            buyerEmail: user.email,
            buyerphone,
            price,
            image,
            meetLocation
        }
        // console.log(bookingData);

        //send booking data to database---------
        fetch('https://easy-buy-server-eight.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    updateBookingStatus(_id)
                    // navigate('/dashboard/myOrders')
                    toast.success('Booking confirmed');
                    navigate('/dashboard/myOrders')
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <input type="text" disabled value={price} className="input w-full input-bordered " />
                        <input name="name" type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" required type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" required type="text" placeholder="Location You will Pick From" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;