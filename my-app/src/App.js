import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonDonBox from "./Components/Button/donation_boxes.js";
import ButtonDonFood from "./Components/Button/food_donation.js";
import ButtonTrashCan from "./Components/Button/Trashcans.js";
import Header from "./Components/Header/header.js";
import Distance from './Components/slider_control/slider_control.js'; 
import LocationGrid from './Components/LocationGrid/grid.js';
import locationsData from './data/locations.json';
import {filterLocationsByDistanceAndType} from './Functions/utilityFunctions.js';
import MapComponent from "./Components/Map/Map";


function App() {
  const [selectedLocation] = useState({
    lat: 45.50492914373302,
    lng: -73.6132153085261,
  });
  const [filterType, setFilterType] = useState('');
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });
  const [maxDistance, setMaxDistance] = useState(0);

  const ButtonClickDonBox = () => {
    setFilterType("clothesCan");
    console.log(filterType);
  };
  const ButtonClickDonFood = () => {
    setFilterType("foodCan");
    console.log(filterType);

  }
  const ButtonClickTrashCan = () => {
    setFilterType("trashCan");
    console.log(filterType);

  }

  const handleDistanceChange = (newDistance) => {
    setMaxDistance(newDistance);
    console.log(newDistance);
  };

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, (error) => {
            console.error("Erreur lors de l'obtention de la position : ", error);
        });
    }
  }, []);

  useEffect(() => {
    const filteredLocations = filterLocationsByDistanceAndType(
      userLocation.latitude, 
      userLocation.longitude, 
      locationsData, 
      maxDistance, 
      filterType
    );
    setLocations(filteredLocations);
    console.log(filteredLocations);
  }, [filterType, userLocation, maxDistance]);

  return (      
    <div className="App">
      <Header />
      <div className='filter-container'>
        <div className="button-container">
          <ButtonDonBox 
            text="Boîte de dons vêtements"
            onClick={ButtonClickDonBox}
          />
          <ButtonDonFood 
          text = "Banque alimentaire"
          onClick = {ButtonClickDonFood}
          />
          <ButtonTrashCan 
          text = "Poubelles"
          onClick = {ButtonClickTrashCan}
          />
        </div>
        <div className='slider'>
          <Distance onDistanceChange={handleDistanceChange} />
        </div>
      </div>
      <div className='result-container'>
        <div className='location-info'>
          <LocationGrid locations={locations} />
        </div>
        <div className='map-container'>
          <MapComponent selectedLocation={selectedLocation}  locations={locations} />
        </div>
      
      </div>
      
    </div>
  );
}

export default App;