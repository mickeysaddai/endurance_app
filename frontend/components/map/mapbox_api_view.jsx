import React from 'react';
import mapboxgl from '!mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
// import './mapbox.css'


// require("dotenv").config();


const accessToken = "pk.eyJ1IjoibWFkZGFpIiwiYSI6ImNrdzBvdmx4ODEydmkydW9iNXZhMGNpNXoifQ.nsp2M1Wo7kiQWz2Lv6oDLA"; 
// const accessToken = require('../../config/keys').mapbox;
mapboxgl.accessToken = accessToken

 const geojson = {
            'type': 'FeatureCollection',
            'features': []
        };
 
// Used to draw a line between points
        const linestring = {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': []
            }
        };
const options = {
    enableHighAccuracy: true,
    timeout: 7000,
    maximumAge: 0
    };
export default class MapboxView extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            lng: -73.906021,
            lat: 40.745541,
            zoom: 12,
            initialized: false

            
        };
        this.mapContainer = React.createRef();
      
        
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            // style: 'mapbox://styles/mapbox/dark-v10',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: 12
        });
        navigator.geolocation.getCurrentPosition(this.onNavigatorSuccess, this.onNavigatorError, options);
        this.initializeMap()
        // this.props.getPlaces( 'dunkin donuts',[this.state.lng,this.state.lat])
    }
    
    onNavigatorSuccess = (pos) => {
        console.log("FOUND YOU", pos)
    var crd = pos.coords;
    const {latitude,longitude } = crd;
     this.setState({ lat: latitude, lng: longitude}, () => {
        this.map.flyTo({
            center: [longitude,latitude], 
            zoom: 15,
            bearing: (Math.random() < 0.5 ? -1 : 1)*Math.floor(Math.random() * 20),
            speed: 2,
            curve: 0.75,
            pitch: 60,
            essential: true
        
        
        })
     })
}
onNavigatorError = (err) => {
    console.log("ERROR!",err)
}


    initializeMap = () => {
        const distanceContainer = document.getElementById('distance');
        this.map.on('load', () => {
    this.map.addSource('geojson', {
        'type': 'geojson',
        'data': geojson
    });

    // Add styles to the this.map
    this.map.addLayer({
        id: 'measure-points',
        type: 'circle',
        source: 'geojson',
        paint: {
            'circle-radius': 5,
            'circle-color': '#000'
        },
        filter: ['in', '$type', 'Point']
    });


    this.map.addLayer({
        id: 'measure-lines',
        type: 'line',
        source: 'geojson',
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        }   ,
    paint: {
    'line-color': '#000',
    'line-width': 2.5
    },
    filter: ['in', '$type', 'LineString']
        });

    this.map.on('click', (e) => {
    const features = this.map.queryRenderedFeatures(e.point, {
    layers: ['measure-points']
    });

    // Remove the linestring from the group
    // so we can redraw it based on the points collection.
    if (geojson.features.length > 1) geojson.features.pop();

    // Clear the distance container to populate it with a new value.
            distanceContainer.innerHTML = '';

    // If a feature was clicked, remove it from the map.
    if (features.length) {
        const id = features[0].properties.id;
        geojson.features = geojson.features.filter(
            (point) => point.properties.id !== id)
    } else {
        const point = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [e.lngLat.lng, e.lngLat.lat]
            },
    'properties': {
    'id': String(new Date().getTime())
    }
    };

    geojson.features.push(point);
    }

    if (geojson.features.length > 1) {
    linestring.geometry.coordinates = geojson.features.map(
    (point) => point.geometry.coordinates
    );

    geojson.features.push(linestring);

    // Populate the distanceContainer with total distance
    const value = document.createElement('pre');
    const distance = turf.length(linestring);
    value.textContent = `Total distance: ${(distance.toLocaleString() * 0.62).toFixed(2)}miles`;
    this.handleDistanceChange(distance.toLocaleString())
    distanceContainer.appendChild(value);
    }

    this.map.getSource('geojson').setData(geojson);
    });
    });

    this.map.on('mousemove', (e) => {
    const features = this.map.queryRenderedFeatures(e.point, {
    layers: ['measure-points']
    });
    // Change the cursor to a pointer when hovering over a point on the this.map.
    // Otherwise cursor is a crosshair.
    this.map.getCanvas().style.cursor = features.length
    ? 'pointer'
    : 'crosshair';
    });
    }

    handleDistanceChange = (distance) => {
        console.log("Logging Distnace", distance)
        // this.props.onDistnace(distance)
    }
    renderMap(){
        this.setState({lng: -73.906021})
        this.setState({lat: 40.745541})
    }

     render(){
       console.log("MAPBOX",this.state)
        return (
            <div>
                <div id="map" ref={this.mapContainer} className="map-container"></div>
                <div id="distance" class="distance-container"></div> 
            </div>
        );
    }
}