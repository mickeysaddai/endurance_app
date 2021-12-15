import React from "react";
import { Link } from "react-router-dom";
import UserActivityIndexContainer from "./user_activity_index_container";
import GoogleMapsComponent from "../activities/MapComponent";
import UserActivityOverview from "./user_activitiy_overview";
import UserActivityTotal from "./user_activity_total";
import UserStats from "./user_stats";
import MapboxView from "../map/mapbox_api_view";

const TABS = {
    DASHBOARD: 'DASHBOARD',
    ACTIVITIES: 'ACTIVITIES',
    FRIENDS: 'FRIENDS',
    REPORTS: 'REPORTS'
}
class UserForm extends React.Component{

    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            activeTab : TABS.DASHBOARD
        }
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }
    // arrow function does not need to be bound
    setActiveTab = (activeTab)  => {
        this.setState({ activeTab })
    }

    renderTab() {
        const { activeTab } = this.state
        switch(activeTab) {
            case TABS.DASHBOARD:
                return (
                    <div>
                        <div className="profileDashboard">
                            <div className="leftContainer">
                        <UserStats miles={this.props.totalMiles} calories={this.props.totalCalories} allActivities={this.props.allActivities}/>
                        </div>
                        <div style={{ marginLeft: '10px'}}>
                            <div className="dashboardActivityTotal">
                          <UserActivityTotal miles={this.props.totalMiles} calories={this.props.totalCalories} allActivities={this.props.allActivities}/>
                          </div>
                         <UserActivityIndexContainer />
                        </div>
                        </div>  
                    </div>
                )
            case TABS.ACTIVITIES: 
            return (
                <div>
                    <UserActivityOverview/> 
                    {/* <GoogleMapsComponent /> */}
                    <MapboxView/>
                </div>
            )
            default: 
                return <h1>Coming Soon!</h1>
        }
    }

    render(){
        const { activeTab } = this.state
        const { userPhoto, username, totalMiles, totalCalories, allActivities} = this.props;
        return (
            <div className="column is-three-fifths userProfileColumn">
                {/* <ActivityIndexContainer miles={totalMiles} calories={totalCalories} allActivities={allActivities}/> */}

                
              
          <div className="tabs user-tabs">
            <div style={{ paddingRight: "20px"}}> 
                        {/* <Stack direction="row" spacing={2}>
                            <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}>M</Avatar>
                        </Stack> */}
                <img src={userPhoto} className="image is-128x128" />
            </div>  
            <div style={{ marginTop: "30px", marginRight: "20px"}}>
                <p>{username}</p>
                {/* <div style={{ fontSize: "small"}}> Active member since November 2021</div> */}
             

                
            </div>  
            <ul>
                <li className={`${activeTab === TABS.DASHBOARD ? "is-active": ""} `} onClick={() => this.setActiveTab(TABS.DASHBOARD)}>
                <a>
                    <div>
                        <div>
                            <span className={`icon is-small ${activeTab === TABS.DASHBOARD ? "iconActive": ""}`}><i className="fas fa-home" aria-hidden="true"></i></span>
                        </div>
                        <span>Dashboard</span>
                    
                        </div>
                </a>
                </li>
                <li className={`${activeTab === TABS.ACTIVITIES ? "is-active": ""} `} onClick={() => this.setActiveTab(TABS.ACTIVITIES)}>

                <a>
                <div>
                        <div>
                            <span className={`icon is-small ${activeTab === TABS.ACTIVITIES ? "iconActive": ""}`}><i className="fas fa-calendar-alt" aria-hidden="true"></i></span>
                        </div>
                        <span>Activites</span>
                    
                        </div>
                </a>
                </li>
                <li className={`${activeTab === TABS.FRIENDS ? "is-active": ""} `} onClick={() => this.setActiveTab(TABS.FRIENDS)}>

                <a>
                <div>
                        <div>
                            <span className={`icon is-small ${activeTab === TABS.FRIENDS ? "iconActive": ""}`}><i className="fas fa-user-friends" aria-hidden="true"></i></span>
                        </div>
                        <span>Friends</span>
                    
                        </div>
                </a>
                </li>
                <li className={`${activeTab === TABS.REPORTS ? "is-active": ""} `} onClick={() => this.setActiveTab(TABS.REPORTS)}>
                <a>
                <div>
                        <div>
                            <span className={`icon is-small ${activeTab === TABS.REPORTS ? "iconActive": ""}`}><i className="fas fa-signal" aria-hidden="true"></i></span>
                        </div>
                        <span>Reports</span>
                    
                        </div>
                </a>
                </li>
            </ul>
        </div>
            {this.renderTab()}

            </div>
        )
    }
}

export default UserForm;