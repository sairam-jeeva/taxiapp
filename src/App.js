import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import BookingForm from "./components/Booking/BookingForm";
import BookingList from "./components/Booking/BookingList";
import DriverDashboard from "./pages/DriverDashboard";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/booking-form" element={<BookingForm token={token} />} />
        <Route path="/booking-list" element={<BookingList token={token} />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
