import React from 'react';
import mapboxgl from '!mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
// import './mapbox.css'


// require("dotenv").config();


const accessToken = "pk.eyJ1IjoibWFkZGFpIiwiYSI6ImNrdzBvdmx4ODEydmkydW9iNXZhMGNpNXoifQ.nsp2M1Wo7kiQWz2Lv6oDLA"; 
// const accessToken = require('../../config/keys').mapbox;
mapboxgl.accessToken = accessToken


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
        window.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            // style: 'mapbox://styles/mapbox/dark-v10',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: 12
        });
       
        this.renderMap()
        
        // this.props.getPlaces( 'dunkin donuts',[this.state.lng,this.state.lat])
    }



    // const geojson = {
    //     'type': 'FeatureCollection',
    //     'features': []
    // };


    // const linestring = {
    // 'type': 'Feature',
    // 'geometry': {
    // 'type': 'LineString',
    // 'coordinates': []
    //         }
    // };

    renderMap(){
        this.setState({lng: -73.906021})
        this.setState({lat: 40.745541})
    }

     render(){
       
        return (
            <div>
                <div id="map" ref={this.mapContainer} className="map-container"></div>
                    
            </div>
        );
    }
}