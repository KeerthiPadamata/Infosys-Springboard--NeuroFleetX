import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/FleetInventory.css';

const FleetInventory = () => {
  const [fleet, setFleet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8080/api/vehicles")
      .then(res => {
        setFleet(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        alert("❌ Failed to fetch fleet data.");
      });
  }, []);

  const removeVehicle = (id) => {
    if (!window.confirm("Are you sure you want to remove this vehicle?")) return;
    
    axios.delete(`http://localhost:8080/api/vehicles/${id}`)
      .then(() => {
        setFleet(fleet.filter(v => v.id !== id));
      })
      .catch(err => {
        console.error(err);
        alert("❌ Failed to remove vehicle.");
      });
  };

  return (
    <div className="fleet-container">
      <h2>🚚 Fleet Inventory</h2>

      {loading ? (
        <p>Loading fleet data...</p>
      ) : fleet.length === 0 ? (
        <p>No vehicles in inventory</p>
      ) : (
        <div className="fleet-list">
          {fleet.map(vehicle => (
            <div key={vehicle.id} className="fleet-card">
              <p><strong>{vehicle.name}</strong> ({vehicle.type})</p>
              <p>Status: {vehicle.status}</p>
              <p>Availability: {vehicle.available ? "✅ Available" : "❌ Unavailable"}</p>
              <button onClick={() => removeVehicle(vehicle.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FleetInventory;
