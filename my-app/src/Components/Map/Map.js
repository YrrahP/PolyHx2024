import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const GOOGLE_MAPS_KEY = "AIzaSyB1kropwH-5_iC-C5omKlgfw0XTKBUvNIU";

const MapComponent = ({ selectedLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_KEY
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "800px",
        }}
        center={selectedLocation}
        zoom={14}
        onLoad={onMapLoad}
      >        
        <MarkerF
          position={selectedLocation}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;