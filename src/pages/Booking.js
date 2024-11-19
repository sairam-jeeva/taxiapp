import React from "react";
import BookingForm from "../components/Booking/BookingForm";
import BookingList from "../components/Booking/BookingList";

const Booking = ({ token }) => {
  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm token={token} />
      <BookingList token={token} />
    </div>
  );
};

export default Booking;
