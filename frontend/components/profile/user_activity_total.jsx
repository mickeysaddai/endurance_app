import React from 'react';
class UserActivityTotal extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        const {miles, calories, allActivities} = this.props;

        return (
            <nav className="level">
            <div className="level-item has-text-centered user-overview">
                <div>
                <div>
                      <i className="fas fa-road road"></i>
                </div>
                <p className="heading">Total Miles</p>
                <p className="title">{miles}</p>
              
                </div>
            </div>
            <div className="level-item has-text-centered user-overview">
                <div>
                 <i className="fas fa-stopwatch stopwatch"></i>
                <p className="heading">Total Activities</p>
                <p className="title">{allActivities}</p>
                </div>
            </div>
          
            <div className="level-item has-text-centered">
                <div>
                    <i className="fas fa-fire-alt cals"></i>
                <p className="heading">Calories</p>
                <p className="title">{calories}</p>
                </div>
            </div>
            </nav>
        )
    }

}

export default UserActivityTotal;