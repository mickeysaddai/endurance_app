import React from "react";

class UserStats extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>STATS</h1>
                <h2>TOTAL ACTIVITIES</h2>
                {this.props.allActivities}
                <h2>TOTAL DISTANCE</h2>
                {this.props.miles}
                <h2>TOTAL CALORIES</h2>
                {this.props.calories}


            </div>
        )
    }
}


export default UserStats;