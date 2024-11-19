import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const newUser = new User({ name, email, password, phone });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
