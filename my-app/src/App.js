import './App.css';
import Button from "./Components/donation_boxes";
import Header from "./Components/header"
import MapComponent from "./Components/Map";
import './Components/ComponentsStyle/header.css'
import React, { useState } from "react";

function App() {
  const [selectedLocation] = useState({
    lat: 45.50492914373302,
    lng: -73.6132153085261,
  });
  return (      
    <div className="App">
      <Header />
      <Button />
      <MapComponent selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;