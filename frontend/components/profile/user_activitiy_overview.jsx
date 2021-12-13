import React from 'react';
class UserActivityOverview extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        const {distance, duration, calories} = this.props;

        return (
            <nav className="level">
            <div className="level-item has-text-centered user-overview">
                <div>
                <div>
                      <i className="fas fa-road"></i>
                </div>
                <p className="heading">Miles</p>
                <p className="title">{distance}</p>
              
                </div>
            </div>
            <div className="level-item has-text-centered user-overview">
                <div>
                 <i className="fas fa-stopwatch"></i>
                <p className="heading">Duration</p>
                <p className="title">{duration}:00</p>
                </div>
            </div>
            <div className="level-item has-text-centered user-overview">
                <div>
               <i className="fas fa-history"></i>
                <p className="heading">Pace</p>
                <p className="title">{Math.round((duration/distance) * 100)/1000}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <i className="fas fa-fire-alt"></i>
                <p className="heading">Calories</p>
                <p className="title">{calories}</p>
                </div>
            </div>
            </nav>
        )
    }

}

export default UserActivityOverview