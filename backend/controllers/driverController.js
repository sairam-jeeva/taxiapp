const Driver = require("../models/Driver");
const Booking = require("../models/Booking");

exports.getDriverRides = async (req, res) => {
  try {
    const driverId = req.user.id;
    const rides = await Booking.find({ driverId });
    const earnings = rides.reduce((total, ride) => total + ride.fare, 0);

    res.json({ rides, earnings });
  } catch (error) {
    res.status(500).json({ message: "Error fetching rides", error });
  }
};

exports.updateDriverAvailability = async (req, res) => {
  try {
    const driverId = req.user.id;
    const { status } = req.body;

    const driver = await Driver.findById(driverId);
    if (!driver) return res.status(404).json({ message: "Driver not found" });

    driver.status = status;
    await driver.save();

    res.json({ message: "Availability status updated", status });
  } catch (error) {
    res.status(500).json({ message: "Error updating availability", error });
  }
};
