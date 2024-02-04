import React from 'react';
import './gridStyle.css';
import { calculateDistance } from '../../Functions/utilityFunctions.js';

const LocationGrid = ({ locations, userLocation }) => {
    return (
        <div>
            {locations.slice(0, 5).map((location, index) => (
                <div key={index} className="location-card">
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
                    {/* Afficher la distance si userLocation est défini */}
                    {userLocation && (
                        <p className="distance-info">
                            {Math.round(calculateDistance(userLocation.latitude, userLocation.longitude, location.location.latitude, location.location.longitude))} m
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LocationGrid;




