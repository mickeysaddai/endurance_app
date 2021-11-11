import React from 'react';
const UserActivityOverview = () => {

    return (
        <nav class="level">
        <div class="level-item has-text-centered user-overview">
            <div>
            <div>
                  <i class="fas fa-road"></i>
            </div>
            <p class="heading">Miles</p>
            <p class="title">2.0</p>
          
            </div>
        </div>
        <div class="level-item has-text-centered user-overview">
            <div>
             <i class="fas fa-stopwatch"></i>
            <p class="heading">Duration</p>
            <p class="title">18:00</p>
            </div>
        </div>
        <div class="level-item has-text-centered user-overview">
            <div>
           <i class="fas fa-history"></i>
            <p class="heading">Pace</p>
            <p class="title">8:30</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <i class="fas fa-fire-alt"></i>
            <p class="heading">Calories</p>
            <p class="title">120</p>
            </div>
        </div>
        </nav>
    )
}

export default UserActivityOverview