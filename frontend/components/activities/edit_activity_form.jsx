
import React, { Component } from 'react'
import DatePicker from './DatePicker';
import ActivityType from "./activity_type";
// import MapContainer from "../map/map_container";
import GoogleMapsComponent from "./MapComponent";
import GoogleMapsComponent2 from "./MapComponent2";
import Navbar from "../navbar";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import history from "../../util/history";;

  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 42.26815277259402, lng: -71.75836401479359
  }
  
const ACTIVITIES = [
    {
        activityType: 'Running', 
         activityIconType: "fa-solid fa-person-running",
         className: 'runner'
    }, 
    
    {
        activityType: 'Walking', 
         activityIconType: "fas fa-walking",
         className: 'walker'
    }, 
    {
        activityType: 'Cycling', 
         activityIconType: "fas fa-biking",
         className: 'cycler'
    }, 
    {
        activityType: 'Hiking', 
         activityIconType: "fas fa-hiking",
         className: 'hiker'
    }, 

]

export default class EditActivityForm extends Component {

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
