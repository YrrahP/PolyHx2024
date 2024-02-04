import './App.css';
import ButtonDonBox from "./Components/Button/donation_boxes";
import Header from "./Components/Header/header";
import MapComponent from "./Components/Map/Map";
import './Components/Header/header.css'
import React, {useState} from "react";

function App() {
  const [selectedLocation] = useState({
    lat: 45.50492914373302,
    lng: -73.6132153085261,
  });
  return (      
    <div className="App">
      <h1>ProxyCollect</h1>
      <Header />
      <div className='button-container'>
        <ButtonDonBox 
        text = "Boîte de dons"
        style={{ 
          top: '300px', 
          left: '300px' 
        }}/>
        <ButtonDonBox 
        text = "Boîte de dons"
        style={{ 
          top: '300px', 
          left: '600px' 
        }}/>
        <ButtonDonBox 
        text = "Boîte de dons"
        style={{ 
          top: '300px', 
          left: '900px' 
        }}/>
      </div>
        <MapComponent selectedLocation={selectedLocation} />
      
      
    </div>
  );
}

export default App;