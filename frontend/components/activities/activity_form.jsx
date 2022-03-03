import React from "react";
import DatePicker from './DatePicker';
import ActivityType from "./activity_type";
import MapboxView from "../map/mapbox_api_view";
import history from "../../util/history";;


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

class ActivityForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: 4,
            activity_type: '',
            duration: '',
            distance: '',
            time: '',
            calories: '',
            heartrate: '',
            date: new Date(),
            description: '',
            step: 1 ,
            isCreatingActivity: false 
    },
        this.handleSubmit = this.handleSubmit.bind(this)
        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)
    }
    handleSubmit(e){
        console.log(this.state)
        this.setState({
            isCreatingActivity: true
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
   
        const activityRequest = this.props.action(activity);
        console.log("my aitvity", activityRequest)
        activityRequest.then(()=> {
            setTimeout(() => {
                this.setState({ isCreatingActivity: false})
                history.push('#/')
                window.location.reload()
            },2000)
        
        })
        activityRequest.catch(()=> {
            console.log("this is the error", error)
            this.setState({ isCreatingActivity: false})

        })
        
    }
    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleDateChange = (newDate) => {
        this.setState({['date']: newDate})
    }

    nextStep(){
        let curStep = this.state.step
        let nextStep = curStep + 1
        this.setState({step: nextStep })

    }
    setStep = (step) => {
         this.setState({step: step })
    }
    previousStep(){
        let curStep = this.state.step
        let lastStep = curStep - 1
        this.setState({step: lastStep })

    }

    onActivityTypeChange = (activity_type) => {
        this.setState({activity_type})
       
    }

    onDistanceUpdate = (distance) => {
        this.setState({
            distance: distance.toFixed(2)
        })
    }



    renderStep(){
        switch (this.state.step) {
            case 1:
                return (
                    <div>
                       


                       <div className="activityContainer">

                      <div className="activities">
                      {
                          ACTIVITIES.map((activity, idx) => {
                              return (<ActivityType key={idx} 
                                activityType={activity.activityType} 
                                activityIconType={activity.activityIconType}
                                className={activity.className}
                                onActivityTypeChange={this.onActivityTypeChange}
                                />
                                )
                            })
                        }
                        </div>
                        </div>

                       <div className="buttons logNext">
                        <button className="button is-success next"onClick={this.nextStep}>Next</button>
                       </div>
                    </div>

                )

            case 2:
            return(
                <div className="activityContainer">
                   <h2 className="plotMap"><i className="fas fa-map-marker-alt"></i> Plot Distance on Map</h2> 
                     <MapboxView onDistanceUpdate={this.onDistanceUpdate} />
                {/* </div> */}
             {/* <div className="" style={{ width: "max-content"}}> */}
               
            
           
                   
                    <div className="backNextButtons">
                        <button className="button is-success back" onClick={this.previousStep}>Back</button>
                        <button className="button is-success next"onClick={this.nextStep}>Next</button>
                    </div>
            </div>
                    )
            case 3:
                return (
                <div>
                
                    <div className="box createActivity">
                        <form className="logForm">
                            <div className="columns">
                                <div className="">
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
                                id="" 
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
                    
                        <div className="backNextButtons">
                            <button className="button is-success back" onClick={this.previousStep}>Back</button>
                            <button className={`button is-success save ${this.state.isCreatingActivity? 'is-loading': ''}`} onClick={this.handleSubmit}>Save</button>
                        </div> 
                    </div>


                    </div>

                )
        
            default:
                break;
        }

    }

    render() {
        const { step } = this.state;
        return (
            <div>
                 
            <div className="">
            <div className="columns activityDetails">              
                <div className="column is-two-thirds buttonColumn">
                     <div className="buttons logNext">
                            <button className={`button is-success is-rounded ${step === 1 ? "" : 'nonActiveStep' } `} onClick={() => this.setStep(1)}>Step 1: Activity/Equpment Type</button>
                            <button className={`button is-success is-rounded ${step === 2 ? "" : 'nonActiveStep' } `} onClick={()=> this.setStep(2)}>Step 2: Add a Map</button>
                            <button className={`button is-success is-rounded ${step === 3 ? "" : 'nonActiveStep' } `} onClick={()=> this.setStep(3)}>Step 3: Additional Details</button>
                       </div>
                    {this.renderStep()}
                  
                 </div>


                {/* <div className="column addActivityRight"> */}
                    {/* <div className="activityDetailsTitle">
                        <h1>Add An Activity</h1>
                    </div> */}


                <div className="activityDetailsType">
                    
                     <div className="column activityDetails">
                         <h1>Add An Activity</h1>
                            <span className="activityType">Activity Type: {this.state.activity_type}</span>
                            <br />
                            <span className="equipementType">Equipment Type:</span>
                            <br />
                            <span className="route">Route:</span>
                            <br />
                            <span className="distance">Distance:{this.state.distance} -mi</span>
                            <br />
                            <span className="duration">Duration: {this.state.duration}</span>
                            <br />
                            <span className="pace">Pace: min/mi</span>
                            <br />
                            <span className="heartrate">Avg. Heart Rate: --BPM</span>
                                <div className="activityDetailsDetail">&nbsp;</div>
                                <div className="activityDetailsLabel">&nbsp;</div>
                            <span className="activityDate">Date of Activity: {this.state.date.toDateString()}</span>
                            <br />
                            <span className="startTime">Start Time: {this.state.time}</span>
                            <br />
                            <span className="endTime">End Time:</span>
                        </div>
                </div>
                </div>
            </div>
         </div>
        //  </div>
        )
    }

}

export default ActivityForm;