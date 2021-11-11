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
  
  const markerposition = {
  lat: 42.253910,
  lng: -71.772240
}

const path = [
  markerposition,
  defaultCenter,
  
];

class GoogleMapsComponent2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          originCoords: [ defaultCenter, defaultCenter], 
          defaultCtr: null
      }
  }
  
 
 

 onLoad = polyline => {
  console.log('polyline here: ', polyline)
};


componentDidMount() {
    var options = {
    enableHighAccuracy: true,
    timeout: 7000,
    maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.onNavigatorSuccess, this.onNavigatorError, options);
}

onNavigatorSuccess = (pos) => {
   var crd = pos.coords;
    const originCoords = [
        {
             lat: crd.latitude,
             lng: crd.longitude
        }   ,
         {
             lat: crd.latitude,
             lng: crd.longitude
        }   
    ]
    this.setState({ originCoords})
    this.setState({ defaultCtr : originCoords[0] })
   console.log('Your current position is:');
   console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
   console.log(`More or less ${crd.accuracy} meters.`);
}

onNavigatorError = (err) => {
    console.log(err)
}

onMapClick = (args) => {
    console.log(args)
}
  onPolyLineClick = (args) => {
    const { latLng } = args;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat, lng)
     const updatePath = this.state.originCoords
     updatePath.push({ lat, lng})
    this.setState({
        originCoords: updatePath
    })    
  
}

 onPolyLineDrag = (args) => {
  console.log("dragging..", args);
} 

 onPolyLinkDragStart = (args) => {
  console.log("dragStart", args)
}

 onPolyLineDragEnd = (args) => {
  console.log("dragEns", args)
}

getOptions = () => {
    return {
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
        paths: this.state.originCoords,
        zIndex: 1
        };

}
render() {
console.log(this.state)
const { originCoords, defaultCtr } = this.state;
console.log(originCoords)
console.log("key", window.googleAPIKey)
    return (
        <div>
             <LoadScript
                googleMapsApiKey={window.googleAPIKey}>
                    <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCtr ||  defaultCenter}
                    clickableIcons={true}
                    onClick={this.onMapClick}
                    >
                       <Polyline
                        onLoad={this.onLoad}
                        path={originCoords}
                        options={this.getOptions()}
                        // draggable={true}
                        // editable={true}
                        onClick={this.onPolyLineClick}
                        onDrag={this.onPolyLineDrag}
                        onDragEnd={this.onPolyLineDragEnd}
                        onDragStart={this.onPolyLinkDragStart}
                      />
                      <DistanceMatrixService
                        options={{
                                destinations:originCoords,
                                origins: [defaultCtr || defaultCenter],
                                travelMode: "DRIVING",
                                }}
                        callback = {(response) => {console.log("distance response", response)}}
/>
                    </GoogleMap> 
                    </LoadScript> 
        </div>
    )
  // console.log("ehlo", process.env.API_KEY)
    }
}

export default GoogleMapsComponent2
