import React from 'react';
import { GoogleMap, LoadScript, GroundOverlay } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 53.5519,
  lng: -2.7656,
};

const MapOverlay = () => {
  const overlayBounds = {
    north: center.lat + 0.001,
    south: center.lat - 0.001,
    east: center.lng + 0.002,
    west: center.lng - 0.002,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBTLruIUSmDFPql77Z80Mqtf4NMflcIevs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
        <GroundOverlay
          bounds={overlayBounds}
          url="https://www.lasselarchitects.com/wp-content/uploads/2019/05/site-plan-sketch-Lassel-Architects.jpg"
          opacity={0.5}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapOverlay;
