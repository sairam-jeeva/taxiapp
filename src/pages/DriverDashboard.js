import React, { useEffect, useState } from "react";
import { getAssignedRides, updateAvailability } from "../api/driverApi";

const DriverDashboard = () => {
  const [rides, setRides] = useState([]);
  const [status, setStatus] = useState("available");
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    // Fetch driver rides and earnings when the component loads
    fetchDriverData();
  }, []);

  const fetchDriverData = async () => {
    try {
      const data = await getAssignedRides();
      setRides(data.rides);
      setEarnings(data.earnings);
    } catch (error) {
      console.error("Error fetching driver data:", error);
    }
  };

  const handleStatusChange = async () => {
    try {
      const updatedStatus = status === "available" ? "unavailable" : "available";
      await updateAvailability(updatedStatus);
      setStatus(updatedStatus);
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  return (
    <div>
      <h2>Driver Dashboard</h2>
      <p>Welcome! Manage your rides, availability, and earnings here.</p>
      <section>
        <h3>Availability Status</h3>
        <p>Current Status: {status}</p>
        <button onClick={handleStatusChange}>
          Set as {status === "available" ? "Unavailable" : "Available"}
        </button>
      </section>
      <section>
        <h3>Assigned Rides</h3>
        {rides.length === 0 ? (
          <p>No assigned rides currently.</p>
        ) : (
          <ul>
            {rides.map((ride) => (
              <li key={ride.id}>
                <p>Pickup: {ride.pickupLocation}</p>
                <p>Dropoff: {ride.dropoffLocation}</p>
                <p>Passenger: {ride.passengerName}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <h3>Earnings Summary</h3>
        <p>Total Earnings: ₹{earnings}</p>
      </section>
      <section>
        <h3>Driver Profile</h3>
        <button>Update Profile</button>
      </section>
    </div>
  );
};

export default DriverDashboard;
