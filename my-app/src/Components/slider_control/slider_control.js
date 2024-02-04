import React, { useEffect, useState } from "react";
import './slider_control.css';

function Distance({ onDistanceChange }) {
    const [data, setData] = useState(0);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setData(newValue);
        onDistanceChange(newValue); // Appelle la fonction callback
    };

    return (
        <div>
            <input className={data > 50 ? 'heigh' : 'less'} type="range" min="0" max="100" step="1" value={data} onChange={handleChange} />
            <h1>{data}</h1>
        </div>
    );
}

export default Distance;
