import React, { useState } from "react";
import axios from "axios";
import '../styles/VehicleHealth.css';

const VehicleHealth = () => {
  const [vehicleId, setVehicleId] = useState("");
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkHealth = () => {
    if (!vehicleId) {
      alert("⚠️ Please enter a Vehicle ID");
      return;
    }

    setLoading(true);
    axios.get(`http://localhost:8080/api/vehicles/health/${vehicleId}`)
      .then(res => {
        setHealthData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        alert("❌ Could not fetch health data. Try again.");
        setLoading(false);
      });
  };

  return (
    <div className="health-container">
      <h2>🛠️ Vehicle Health Check</h2>

      <input
        type="text"
        placeholder="Enter Vehicle ID"
        value={vehicleId}
        onChange={(e) => setVehicleId(e.target.value)}
      />
      <button onClick={checkHealth}>Check Health</button>

      {loading && <p>Loading...</p>}

      {healthData && (
        <div className="health-details">
          <h3>Health Status for Vehicle {vehicleId}</h3>
          <ul>
            <li>Engine: {healthData.engine}</li>
            <li>Fuel Level: {healthData.fuelLevel}</li>
            <li>Tire Pressure: {healthData.tirePressure}</li>
            <li>Battery: {healthData.battery}</li>
            <li>Overall Status: {healthData.status}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VehicleHealth;
