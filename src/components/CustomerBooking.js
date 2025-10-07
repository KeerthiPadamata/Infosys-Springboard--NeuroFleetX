import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/UserBooking.css';

const UserBooking = () => {
  const [availableDrivers, setAvailableDrivers] = useState([]);
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    email: "",
    pickup: "",
    dropoff: "",
    selectedDriver: null,
  });

  useEffect(() => {
    const demoDrivers = [
      { id: 101, name: "Liam Walker", phone: "1112223333", email: "driver1@example.com" },
      { id: 102, name: "Olivia Johnson", phone: "4445556666", email: "driver2@example.com" },
      { id: 103, name: "Ethan White", phone: "7778889999", email: "driver3@example.com" }
    ];
    setAvailableDrivers(demoDrivers);
  }, []);

  const bookDriver = (driverId) => {
    if (!bookingInfo.name || !bookingInfo.email || !bookingInfo.pickup || !bookingInfo.dropoff) {
      alert("⚠️ Please fill in all required fields!");
      return;
    }

    const payload = { ...bookingInfo, selectedDriver: driverId };

    axios.post("http://localhost:8080/api/bookings/add", payload)
      .then(() => {
        alert("✅ Booking confirmed! Driver has been notified via email.");
        setAvailableDrivers(availableDrivers.filter(d => d.id !== driverId));
        setBookingInfo({
          name: "",
          email: "",
          pickup: "",
          dropoff: "",
          selectedDriver: null
        });
      })
      .catch(err => {
        console.error(err);
        alert("❌ Booking failed. Please try again later.");
      });
  };

  return (
    <div className="booking-wrapper">
      <h2>🚖 Book a Ride</h2>

      <input
        type="text"
        placeholder="Enter Your Full Name"
        value={bookingInfo.name}
        onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={bookingInfo.email}
        onChange={(e) => setBookingInfo({ ...bookingInfo, email: e.target.value })}
      />

      <div className="location-inputs">
        <input
          type="text"
          placeholder="Pickup Address"
          value={bookingInfo.pickup}
          onChange={(e) => setBookingInfo({ ...bookingInfo, pickup: e.target.value })}
        />
        <span className="arrow-symbol">➡️</span>
        <input
          type="text"
          placeholder="Dropoff Address"
          value={bookingInfo.dropoff}
          onChange={(e) => setBookingInfo({ ...bookingInfo, dropoff: e.target.value })}
        />
      </div>

      <h3>Available Drivers</h3>
      {availableDrivers.length === 0 ? (
        <p>No drivers are currently available</p>
      ) : (
        <div className="driver-cards">
          {availableDrivers.map(driver => (
            <div key={driver.id} className="driver-card" onClick={() => bookDriver(driver.id)}>
              <p><strong>{driver.name}</strong></p>
              <p>📞 {driver.phone}</p>
              <p>📧 {driver.email}</p>
              <button>Reserve Driver</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBooking;
