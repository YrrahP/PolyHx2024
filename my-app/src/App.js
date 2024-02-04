import React, { useState } from "react";
import "./App.css";
import MapComponent from "./Components/Map";

function App() {
  const [selectedLocation] = useState({
    lat: 45.50492914373302,
    lng: -73.6132153085261,
  });
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapComponent selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;