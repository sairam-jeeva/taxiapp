import React, { useState, useEffect } from "react";
import { getBookings } from "../../api/bookingApi";

const BookingList = ({ token }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await getBookings(token);
        setBookings(data);
      } catch (error) {
        alert("Error fetching bookings");
      }
    };
    fetchBookings();
  }, [token]);

  return (
    <ul>
      {bookings.map((booking) => (
        <li key={booking._id}>
          {booking.pickupLocation} to {booking.dropOffLocation} - {booking.status}
        </li>
      ))}
    </ul>
  );
};

export default BookingList;
