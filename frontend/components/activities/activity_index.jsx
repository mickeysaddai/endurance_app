import React from "react";
import { Link } from "react-router-dom";
import ActivityIndexItem from "./activity_index_item";
class ActivityIndex extends React.Component{
    componentDidMount(){
        this.props.fetchActivities();

    }
    render(){
        const {activities} = this.props;
        console.log(activities)
        return (
            <div className="columns">
                <div className="column">

                </div>
                <div className="column is-two-thirds">
                    <div class="box">
                        <h1><strong>FitnessFeed</strong></h1>
                    </div>
                    {
                        activities.map(activity => {
                            return (activity !== undefined && <ActivityIndexItem activity={activity} />)
                        })
                    }
                    <Link to={'/'}>Log</Link>
                </div>
                <div className="column">

                </div>
                 

            </div>
        )
    }
}

export default ActivityIndex;