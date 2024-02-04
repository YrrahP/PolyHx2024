import React, { useState } from "react";
import './slider_control.css';

function Distance({ onDistanceChange }) {
    const [data, setData] = useState(0);

    const handleChange = (e) => {
        let sliderValue = parseInt(e.target.value, 10);

        let newValue;
        if (sliderValue <= 50) {
            // De 0 à 50 sur le slider correspond à 0 - 500 mètres (incréments de 10 m)
            newValue = sliderValue * 10;
        } else {
            // Au-delà de 50 sur le slider, incréments de 200 m (0.2 km)
            newValue = 500 + (sliderValue - 50) * 200;
        }
        
        setData(newValue);
        onDistanceChange(newValue);
    };

    const displayDistance = (value) => {
        return value >= 1000 ? `${(value / 1000).toFixed(1)} km` : `${value} m`;
    };

    const trackStyle = {
        backgroundColor: 'red',
    };

    return (
        <div className="slider-container">
            <input
                className="slider"
                style={trackStyle}
                type="range"
                min="0"
                max="98" // 50 pour les 500 premiers mètres, puis 48 incréments de 200 mètres
                step="1"
                value={data <= 500 ? data / 10 : 50 + (data - 500) / 200}
                onChange={handleChange}
            />
            <h1 className="distance-text">{displayDistance(data)}</h1>
        </div>
    );
}

export default Distance;