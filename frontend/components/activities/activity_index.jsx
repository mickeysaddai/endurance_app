import React from "react";

class ActivityIndex extends React.Component{
    componentDidMount(){
        this.props.fetchActivities();

    }
    render(){
        const {activities} = this.props;
        return (
            <div>
                <ul>
                    {
                        activities.map(activity => {
                            return (<ActivityIndexItem activity={activity}/>)
                        })
                    }
                </ul>
                <Link to={}>Log</Link>
                

            </div>
        )
    }
}

export default ActivityIndex;