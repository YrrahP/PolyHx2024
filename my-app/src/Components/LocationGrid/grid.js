import React from 'react';
import './gridStyle.css';


const LocationGrid = ({ locations }) => {
    return (
      <div>
        {locations.slice(0, 5).map((location, index) => (
          <div key={index} className="location-card">
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default LocationGrid;



