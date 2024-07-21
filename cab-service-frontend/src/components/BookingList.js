import React, { useEffect, useState } from "react";
import axios from 'axios';

const BookingList = () => {
    
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try{
                const response = await axios.get('http://localhost:5000/bookings');
                setBookings(response.data);
            }
            catch(err){
                console.error('Error Fetching Bookings');
            }
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.employeeName} &nbsp; booked &nbsp; a &nbsp; cab &nbsp; from &nbsp; 
                        {booking.pickupLocation} &nbsp; to &nbsp; 
                        {booking.dropLocation} &nbsp; on &nbsp; {new Date(booking.bookingDate).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default BookingList;