import React from "react";
import Button from '@mui/material/Button';
import GoogleMapsComponent from "./MapComponent";
import GoogleMapsComponent2 from "./MapComponent2";
import UserActivityOverview from '../profile/user_activitiy_overview';


  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 42.26815277259402, lng: -71.75836401479359
  }

class ActivityShowPage extends React.Component{
    constructor(props) {
        super(props)
        const { activity} = props;
        this.state = {
            id: activity.id,
            user_id: activity.user_id ,
            activity_type: activity.activity_type,
            duration: activity.duration,
            distance: activity.distance,
            time: activity.time,
            calories: activity.calories,
            heartrate: activity.heartrate,
            date: new Date(),
            description: activity.description,
           
            }
        
    }


    render(){
        return (
            <div>
              
                 <div className="box">
    
                <div>

                  <Button variant="contained">Edit</Button>
                </div>
                <UserActivityOverview distance={this.state.distance} duration={this.state.duration} calories={this.state.calories}/>
                 <GoogleMapsComponent2/>
                
                </div>
            </div>
        )
    }
}

export default ActivityShowPage;