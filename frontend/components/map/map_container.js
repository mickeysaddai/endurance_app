import React from 'react';
​
const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
      <div>Google Maps
     {/* <LoadScript
       googleMapsApiKey='AIzaSyAVX076vD-t3L7hgugoMRRUeGlUric1vtA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript> */}
     </div>
  )
}
​
export default MapContainer;


// import { GoogleMap, LoadScript } from '@react-google-maps/api';
