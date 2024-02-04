import React, {useEffect, useState} from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./map.css";

const GOOGLE_MAPS_KEY = "AIzaSyB1kropwH-5_iC-C5omKlgfw0XTKBUvNIU";

const MapComponent = ({ selectedLocation, locations }) => {
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
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%"
        }}
        center={selectedLocation}
        zoom={14}
        onLoad={onMapLoad}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{
              lat: location.location.latitude,
              lng: location.location.longitude
            }}
          />
        ))}

      </GoogleMap>
    </div>
  );
};

export default MapComponent;