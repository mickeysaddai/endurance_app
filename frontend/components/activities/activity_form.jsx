import React from "react";

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
            date: '',
            description: '',

    },
        this.handleSubmit = this.handleSubmit.bind(this)
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

    render() {
        return (
            <div className="box">
            <div className="columns activityDetails">
                    <div className="column is-one-fifth"></div>


                <div className="column is-half">
                    <div className="box createActivity">
                        <form>

                            <label>Date:
                            <input type="date" 
                            onChange={this.update('date')}
                            />
                            </label>
                            
                        

                            <label className="activitytype">Activity type:
                            <input type="text" 
                            name="activity_type"
                            value={this.state.activity_type} 
                            onChange={this.update('activity_type')}
                            />
                            </label>



                            <label>Distance:
                            <input type="text" 
                            name="distance"
                            value={this.state.distance} 
                            id="" 
                            onChange={this.update('distance')}
                            />
                            </label>



                            <label>Duration
                            <input type="text" 
                            name="duration"
                            value={this.state.duration} 
                            id="" 
                            onChange={this.update('duration')}
                            />
                            </label>


                            <label>Average Heart Rate (optional):
                            <input type="text" 
                            name="duration"
                            value={this.state.duration} 
                            id="" 
                            onChange={this.update('duration')}
                            />
                            </label>



                            <label>Start Time:
                            <input type="time" 
                            name="time"
                            value={this.state.time} 
                            onChange={this.update('time')}
                            />
                            </label>



                            <label>Calories:
                            <input type="text" 
                            name="time"
                            value={this.state.calories} 
                            onChange={this.update('calories')}
                            />
                            </label> 

                        

                            <label>How did it go?:
                            <textarea className="textarea is-success description" 
                            placeholder="description" 
                            value={this.state.description} 
                            onChange={this.update('description')}>
                            </textarea>
                            </label>



                            <div className="buttons">
                             <button className="button is-success save" onClick={this.handleSubmit}>Save</button>
                            </div>

                        </form>

                    </div>
                 </div>


                <div className="column is-one-fifth">
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