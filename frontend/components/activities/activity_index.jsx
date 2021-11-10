import React from "react";
import { Link } from "react-router-dom";
import ActivityIndexItem from "./activity_index_item";
import Navbar from "../navbar";
class ActivityIndex extends React.Component{
    componentDidMount(){
        this.props.fetchActivities();

    }
    render(){
        const {activities} = this.props;
        console.log(activities)
            
        return (
        <div>                
            <div className="columns">
                <div className="column">

                </div>
                    <div className="column is-three-fifths">
                    <div className="box feed">
                        <h1>FitnessFeed</h1>
                    </div>
                    {
                        activities.map((activity, i)=> {
                            return (activity !== undefined && <ActivityIndexItem key={i} activity={activity} />)
                        })
                    }
                </div>
                <div className="column">

                </div>
                 

            </div>
        </div>
        )
    }
}

export default ActivityIndex;