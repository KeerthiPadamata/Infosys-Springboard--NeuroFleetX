import React, { useState } from "react";
import axios from "axios";
import '../styles/RouteOptimizer.css';

const RouteOptimizer = () => {
  const [route, setRoute] = useState({
    start: "",
    end: ""
  });
  const [optimizedRoute, setOptimizedRoute] = useState(null);
  const [loading, setLoading] = useState(false);

  const findRoute = () => {
    if (!route.start || !route.end) {
      alert("⚠️ Please enter both start and end locations!");
      return;
    }

    setLoading(true);
    axios.post("http://localhost:8080/api/routes/optimize", route)
      .then(res => {
        setOptimizedRoute(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        alert("❌ Failed to fetch optimized route.");
        setLoading(false);
      });
  };

  return (
    <div className="route-container">
      <h2>🗺️ Route Optimization</h2>

      <input
        type="text"
        placeholder="Starting Location"
        value={route.start}
        onChange={(e) => setRoute({ ...route, start: e.target.value })}
      />
      <input
        type="text"
        placeholder="Destination"
        value={route.end}
        onChange={(e) => setRoute({ ...route, end: e.target.value })}
      />
      <button onClick={findRoute}>Optimize Route</button>

      {loading && <p>Calculating optimal route...</p>}

      {optimizedRoute && (
        <div className="route-details">
          <h3>Optimal Route:</h3>
          <p>Route: {optimizedRoute.path}</p>
          <p>Distance: {optimizedRoute.distance}</p>
          <p>Estimated Time: {optimizedRoute.time}</p>
        </div>
      )}
    </div>
  );
};

export default RouteOptimizer;
