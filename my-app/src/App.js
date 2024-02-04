import React, { useState, useEffect } from 'react';
import LocationGrid from './components/LocationGrid';
import Distance from './components/slider_control/';
import locationsData from './data/locations.json';
import { filterLocationsByDistanceAndType } from './Functions/utilityFunctions';

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

    return (
        <div>
            {/* Les boutons et autres éléments d'interface utilisateur ici */}
            <Distance onDistanceChange={handleDistanceChange} />
            <LocationGrid locations={locations} />
        </div>
    );
};

export default App;

