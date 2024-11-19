import React, { useState } from "react";
// import { createBooking } from "../../api/bookingApi";//

const BookingForm = ({ token }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    // const data = await createBooking({ pickupLocation, dropOffLocation }, token);
      alert("Booking created successfully!");
    } catch (error) {
      alert("Error creating booking");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Drop Off Location"
        value={dropOffLocation}
        onChange={(e) => setDropOffLocation(e.target.value)}
      />
      <button type="submit">Create Booking</button>
    </form>
  );
};

export default BookingForm;
