import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  vehicleType: { type: String },
  availability: { type: Boolean, default: true },
}, { timestamps: true });

const Driver = mongoose.model("Driver", driverSchema);
export default Driver;
