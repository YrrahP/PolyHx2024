import React, { useEffect, useState } from "react";
import './slider_control.css';

function Distance() {
    const [data,setData] = useState(0)
    return(
        <div>
            <input className={data>50?'heigh':'less'} type="range" min="0" max="100" step="1" value={data} onChange={(e)=>setData(e.target.value)} />
            <h1>{data}</h1>
        </div>
    );
}
export default Distance;