import React from "react";
import DatePicker from './DatePicker';

class ActivityForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: 4,
            activity_type: '',
            duration: '',
            distance: '',
            time: '',
            heartrate: '',
            date: new Date(),
            description: '',
            step: 1  
    },
        this.handleSubmit = this.handleSubmit.bind(this)
        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)
    }
    handleSubmit(e){
        console.log(this.state)
        e.preventDefault();
        // do some validation
        this.props.action(this.state)
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
    previousStep(){
        let curStep = this.state.step
        let lastStep = curStep - 1
        this.setState({step: lastStep })

    }



    renderStep(){
        switch (this.state.step) {
            case 1:
                return (
                    <div>
                    <button onClick={this.nextStep}>Next</button>
                    <div className="box activitySelector">

                      <div className="box runner">
                      <i className="fa-solid fa-person-running"></i>
                      <h2>Running</h2>
                      </div>

                      <div className="box walker">
                      <i className="fas fa-walking"></i>
                      <h2>Walking</h2>
                      </div>

                      <div className="box cycler">
                      <i className="fas fa-biking"></i>
                      <h2>Cycling</h2>
                      </div>

                      <div className="box hiker">
                      <i className="fas fa-hiking"></i>
                      <h2>Hiking</h2>
                      </div>
                      </div>

                    </div>

                )

            case 2:
            return(
                <div>
                 <button onClick={this.nextStep}>Next</button>
                 <button onClick={this.previousStep}>Back</button>
                <h2>MAPPING</h2>
                </div>
            )
            case 3:
                return (
                
                    <div className="box createActivity">
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
                            <div className="buttons logSave">
                             <button className="button is-success save" onClick={this.handleSubmit}>Save</button>
                             <button onClick={this.previousStep}>Back</button>
                            </div>


                    </div>

                )
            
                break;
        
            default:
                break;
        }

    }

    render() {
        return (
            <div className="box">
            <div className="columns activityDetails">
                    <div className="column is-one-fifth fifth"></div>


                <div className="column is-half half">
                    {this.renderStep()}
                    
                 </div>


                <div className="column is-one-fifth addActivityRight">
                    <div className="box activityDetailsTitle">
                        <h1>Add An Activity</h1>
                    </div>


                <div className="box activityDetailsType">
                     <div className="activityDetails">
                            <span className="activityType">Activity Type:</span>
                            <br />
                            <span className="running">Running:</span>
                            <br />
                            <span className="equipementType">Equipment Type:</span>
                            <br />
                            <span className="route">Route:</span>
                            <br />
                            <span className="distance">Distance:</span>
                            <br />
                            <span className="duration">Duration:</span>
                            <br />
                            <span className="pace">Pace:</span>
                            <br />
                            <span className="heartrate">Avg. Heart Rate:</span>
                                <div className="activityDetailsDetail">&nbsp;</div>
                                <div className="activityDetailsLabel">&nbsp;</div>
                            <span className="activityDate">Date of Activity:</span>
                            <br />
                            <span className="startTime">Start Time:</span>
                            <br />
                            <span className="endTime">End Time:</span>


                        </div>

                </div>
         
                </div>
            </div>
        </div>
        )
    }

}

export default ActivityForm;