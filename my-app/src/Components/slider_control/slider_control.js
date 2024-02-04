import React, { useState } from "react";
import './slider_control.css';

function Distance({ onDistanceChange }) {
    const [data, setData] = useState(0);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setData(newValue);
        onDistanceChange(newValue);
    };
    const displayDistance = (value) => {
        return value > 1000 ? `${(value / 1000).toFixed(2)} kilomètres` : `${value} mètres`;
    }
    const trackStyle = {
        backgroundColor: 'red', // Couleur conditionnelle
    };


    return (
        <div className="slider-container">
            <input
                className={data > 50 ? 'heigh' : 'less'}
                style={trackStyle}
                type="range"
                min="0"
                max="10000"
                step="1"
                value={data}
                onChange={handleChange}
            />
            <h1 className="distance-text">{displayDistance(data)}</h1>
        </div>
    );
}

export default Distance;