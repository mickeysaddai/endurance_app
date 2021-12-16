
import React, { Component } from 'react'
import DatePicker from './DatePicker';
import ActivityType from "./activity_type";
import history from "../../util/history";
import UserActivityOverview from '../profile/user_activitiy_overview';
import MapboxView from '../map/mapbox_api_view';

  
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
    constructor(props) {
        super(props)
          console.log(props)
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
            isCreatingActivity: false 
    },
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

     handleSubmit(e){
      
        console.log(this.state)
        this.setState({
            isEditingActivity: true
        })
        const {
            activity_type,
            duration,
            distance,
            time,
            calories,
            heartrate,
            date,
            description, 
    } = this.state
        const activity = {
            id: this.props.activity.id,
            user_id: this.props.userId,
            activity_type,
            duration,
            distance,
            time,
            calories,
            heartrate,
            date,
            description
    }
        e.preventDefault();
   
        this.props.action(activity).then(()=> {
            setTimeout(() => {
                this.setState({ isEditingActivity: false})
                history.push('#/')
                window.location.reload()
            },2000)
        
        })
    }

     update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleDateChange = (newDate) => {
        this.setState({['date']: newDate})
    }

     onActivityTypeChange = (activity_type) => {
        this.setState({activity_type})
       
    }

    onDistanceUpdate= (distance) => {
        this.setState({
            distance
        })
    }

    handleDelete = () => {
        console.log("clicking ")
        this.props.delete(this.props.activity.id)
        history.push(`/#/`);
          window.location.reload()   

    }


    render() {
        const { activity_type, distance, duration, calories} = this.state;
        return (
            <div className="box">
                <UserActivityOverview distance={distance} duration={duration} calories={calories}/>
                
                
                <div>
                <div className="box">
                    {/* <MapboxView/> */}
                    </div >
                
                    </div>
                   
                 <div className="box editActivityContainer">

                      <div className="editActivities">
                      {
                          ACTIVITIES.map((activity, idx) => {
                              return (<ActivityType key={idx} 
                                activityType={activity.activityType} 
                                selected={activity.activityType === activity_type}
                                activityIconType={activity.activityIconType}
                                className={activity.className}
                                onActivityTypeChange={this.onActivityTypeChange}
                                />
                                )
                            })
                        }
                        </div>
                        </div>

            
                     <div>
                
                    <div className="box editActivity">
                        <form className="logForm">
                            <div className="columns">
                                <div className="column">
                                <div>
                                <label className="logDate">Date of Activity
                                <div>
                                <DatePicker date={this.state.date} onDateChange={this.handleDateChange} />
                                </div>
                             
                                </label>
                                </div>
                                <label className="logBPM">Average Heart Rate (optional):
                                <input className="inputBPM" type="text" 
                                name="BPM"
                                value={this.state.heartrate} 
                                onChange={this.update('heartrate')}
                                />
                                </label>


                                <div>
                                <label className="logActivitytype">Activity type:
                                <input className="inputActivitytype" type="text" 
                                name="activity_type"
                                value={this.state.activity_type} 
                                onChange={this.update('activity_type')}
                                />
                                </label>
                            </div>

                                </div>
                                <div className ="column logColumn">
                                <label className="logDuration">Duration:
                                <input className="inputDuration" type="text" 
                                name="duration"
                                value={this.state.duration} 
                                id="" 
                                onChange={this.update('duration')}
                                />
                                </label>


                             <label className="logStartTime">Start Time:
                            <input className="inputStartTime"type="time" 
                            name="time"
                            value={this.state.time} 
                            onChange={this.update('time')}
                            />
                            </label>


                            <div>
                             <label className="logDistance">Distance:
                            <input className="inputDistance" type="text" 
                            name="distance"
                            value={this.state.distance} 
                            id="" 
                            onChange={this.update('distance')}
                            />
                            </label>
                            </div>


                            <div>
                             <label className="logCalories">Calories:
                            <input className="inputCalories" type="text" 
                            name="time"
                            value={this.state.calories} 
                            onChange={this.update('calories')}
                            />
                            </label>  
                            </div>
                                </div>
                            </div>
                
                        
                            <label className="logDescription">How did it go?:
                            <textarea className="description"  
                            value={this.state.description} 
                            onChange={this.update('description')}>
                            </textarea>
                            </label>

                           

                        </form>

                             {/* <button className="backOnLast" onClick={this.previousStep}>Back</button> */}


                    </div>

                    <div navigationButtons>
                        <button className={`button is-success save ${this.state.isCreatingActivity? 'is-loading': ''}`} onClick={this.handleSubmit}>Save</button>
                        <button className="button is-success save" onClick={this.handleDelete}>Delete</button>
                    
                    </div>


                    </div>
                
            </div>
        )
    }
}
