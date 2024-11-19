import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  const { userId, driverId, pickupLocation, dropoffLocation, fare } = req.body;

  try {
    const newBooking = new Booking({ userId, driverId, pickupLocation, dropoffLocation, fare });
    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
