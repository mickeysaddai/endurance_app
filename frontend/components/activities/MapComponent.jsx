import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 42.26815277259402, lng: -71.75836401479359
  }
  
const GoogleMapsComponent = () => {
  // console.log("ehlo", process.env.API_KEY)

    return (
        <div>
             <LoadScript
                googleMapsApiKey='AIzaSyAVX076vD-t3L7hgugoMRRUeGlUric1vtA'>
                    <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCenter}
                    />
                    </LoadScript> 
        </div>
    )
}

export default GoogleMapsComponent