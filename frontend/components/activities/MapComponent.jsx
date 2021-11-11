import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { DistanceMatrixService } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { Polyline } from '@react-google-maps/api';
import { Polygon } from '@react-google-maps/api';
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 42.26815277259402, lng: -71.75836401479359
  }
  
const GoogleMapsComponent = () => {

  const [originCoords, setOriginCoords ] = React.useState([])
 
 
const markerposition = {
  lat: 42.253910,
  lng: -71.772240
}

const onLoad = polyline => {
  console.log('polyline here: ', polyline)
};

const path = [
  markerposition,
  defaultCenter,
  
];

const onPolyLineClick = (args) => {
  console.log("clicked!", args)
    const { latLng } = args;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat, lng)
     const updatePath = originCoords
     updatePath.push({ lat, lng})
     console.log(updatePath)
     setOriginCoords(updatePath)
    console.log("state", originCoords)
  
}

const onPolyLineDrag = (args) => {
  console.log("dragging..", args);
} 

const onPolyLinkDragStart = (args) => {
  console.log("dragStart", args)
}

const onPolyLineDragEnd = (args) => {
  console.log("dragEns", args)
}

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: true,
  draggable: true,
  editable: true,
  visible: true,
  radius: 30000,
  onDrag: (e)=> { console.log('dragging ...', e)},
  paths: originCoords,
  zIndex: 1
};
console.log(originCoords)
    return (
        <div>
             <LoadScript
                googleMapsApiKey={window.googleAPIKey}>
                    <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCenter}
                    clickableIcons={true}
                    onClick={onPolyLineClick}
                    >
                       <Polyline
                        onLoad={onLoad}
                        path={originCoords}
                        options={options}
                        // draggable={true}
                        // editable={true}
                        onClick={onPolyLineClick}
                        onDrag={onPolyLineDrag}
                        onDragEnd={onPolyLineDragEnd}
                        onDragStart={onPolyLinkDragStart}
                      />
                    </GoogleMap> 
                    </LoadScript> 
        </div>
    )
  // console.log("ehlo", process.env.API_KEY)

}

export default GoogleMapsComponent