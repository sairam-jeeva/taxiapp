import express from "express";
import Driver from "../models/Driver.js";

const router = express.Router();

// Add a new driver
router.post("/", async (req, res) => {
  const { name, licenseNumber, phone, vehicleType } = req.body;

  try {
    const newDriver = new Driver({ name, licenseNumber, phone, vehicleType });
    await newDriver.save();
    res.status(201).json({ message: "Driver added successfully", driver: newDriver });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
