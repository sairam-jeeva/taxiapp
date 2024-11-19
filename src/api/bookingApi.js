import axios from "axios";

export const createBooking = async (bookingData, token) => {
  return axios.post("/api/bookings", bookingData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getBookings = async (token) => {
  return axios.get("/api/bookings", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
