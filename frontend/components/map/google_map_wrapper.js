import React from 'react';
import ReactDOM from 'react-dom';

const mapCenter = { lat: 37.7758, lng: -122.435 };

// I made some lat/lng points for some good burrito spots
const burritos = [
  { lat: 37.775785, lng: -122.445979, name: "Papalote" },
  { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
  { lat: 37.781899, lng: -122.410426, name: "Cancun" }
];

class GoogleMapWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.addBurritoPlace = this.addBurritoPlace.bind(this);
  }
 
  componentDidMount() {
      const map = ReactDOM.findDOMNode(this.refs.map)
    
    /*
     * we make these options so when the map loads up it displays a
     * good location and zoom level, zoom of 13 show most of SF
     */
    const options = {
      center: this.props.center,
      zoom: 13
    };

    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);

    // add a movement listener
    this.listenForMove();

    // we are going to add a map marker for each burrito place now
    this.props.burritoPlaces.forEach(this.addBurritoPlace);
  }

    addBurritoPlace(burritoPlace) {
    /*
     * we make an instance of the google maps LatLng class, args are
     * (lat, lng)
     */
    const pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng);
    
    /* 
     * then we use our new instance of LatLng to make a marker
     * set map to this.map, this is what adds it to the map
     * when we want to remove this marker, we need to set its
     * map property to null using myMarker.setMap(null)
     */
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    // when the marker is clicked on, alert the name
    marker.addListener('click', () => {
      alert(`clicked on: ${burritoPlace.name}`);
    });
  }

    listenForMove() {
    /* 
     * we listen for the map to emit an 'idle' event, it does this when
     * the map stops moving
     */
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      alert('map has moved, check console to see updated bounds');

      console.log('center',
        bounds.getCenter().lat(), 
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(), 
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(), 
        bounds.getSouthWest().lng());
    });
  }
}