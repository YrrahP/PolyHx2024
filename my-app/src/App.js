import React, { useState, useEffect } from 'react';
import LocationGrid from './Components/LocationGrid/grid.js';
import Distance from './Components/slider_control/slider_control';
import locationsData from './data/locations.json';
import { filterLocationsByDistanceAndType } from './Functions/utilityFunctions';
import ButtonDonBox from "./Components/Button/donation_boxes";
import Header from "./Components/Header/header";

const App = () => {
    const [locations, setLocations] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });
    const [maxDistance, setMaxDistance] = useState(0);

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
        const { latitude, longitude } = userLocation;
        const filteredLocations = filterLocationsByDistanceAndType(latitude, longitude, locationsData, maxDistance, selectedType);
        setLocations(filteredLocations);
    }, [selectedType, userLocation, maxDistance]);

    const handleDistanceChange = (newDistance) => {
        setMaxDistance(newDistance);
    };

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };

    return (
        <div className="App">
            <Header />
            <div>
                <ButtonDonBox 
                    text="Poubelle"
                    style={{ position: 'absolute', top: '300px', left: '300px' }}
                    onClick={() => handleTypeSelection('trashCan')}
                />
                <ButtonDonBox 
                    text="Boîte de vêtements"
                    style={{ position: 'absolute', top: '300px', left: '600px' }}
                    onClick={() => handleTypeSelection('clothesCan')}
                />
                <ButtonDonBox 
                    text="Distributeur de nourriture"
                    style={{ position: 'absolute', top: '300px', left: '900px' }}
                    onClick={() => handleTypeSelection('foodCan')}
                />
            </div> 
            <Distance onDistanceChange={handleDistanceChange} />
            <LocationGrid locations={locations} />
        </div>
    );
};

export default App;
