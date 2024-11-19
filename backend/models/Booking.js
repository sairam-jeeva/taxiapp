import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  fare: { type: Number },
  status: { type: String, enum: ["pending", "confirmed", "completed"], default: "pending" },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
