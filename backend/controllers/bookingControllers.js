const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const { pickupLocation, dropOffLocation, driverId } = req.body;
  try {
    const booking = await Booking.create({
      user: req.user._id,
      pickupLocation,
      dropOffLocation,
      driver: driverId,
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("driver", "name");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
