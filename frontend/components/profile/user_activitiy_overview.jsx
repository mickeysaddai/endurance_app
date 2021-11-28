import React from 'react';
const UserActivityOverview = () => {

    return (
        <nav className="level">
        <div className="level-item has-text-centered user-overview">
            <div>
            <div>
                  <i className="fas fa-road"></i>
            </div>
            <p className="heading">Miles</p>
            <p className="title">2.0</p>
          
            </div>
        </div>
        <div className="level-item has-text-centered user-overview">
            <div>
             <i className="fas fa-stopwatch"></i>
            <p className="heading">Duration</p>
            <p className="title">18:00</p>
            </div>
        </div>
        <div className="level-item has-text-centered user-overview">
            <div>
           <i className="fas fa-history"></i>
            <p className="heading">Pace</p>
            <p className="title">8:30</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
                <i className="fas fa-fire-alt"></i>
            <p className="heading">Calories</p>
            <p className="title">120</p>
            </div>
        </div>
        </nav>
    )
}

export default UserActivityOverview