import React from "react";
import { Link } from "react-router-dom";
import ActivityIndexContainer from "../activities/activity_index_container";
import GoogleMapsComponent from "../activities/MapComponent";
import UserActivityOverview from "./user_activitiy_overview";
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
                         <ActivityIndexContainer />
                    </div>
                )
            case TABS.ACTIVITIES: 
            return (
                <div>
                    <UserActivityOverview/>
                    <GoogleMapsComponent />
                </div>
            )
            default: 
                return <h1>Coming Soon!</h1>
        }
    }

    render(){
        const { activeTab } = this.state
        return (
            <div className="box">
              
          <div className="tabs user-tabs">
            <div style={{ paddingRight: "20px"}}> 
                <img src="https://profile-pic.runkeeper.com/JN5wo7onFOrxoTImLNm1NDkp_med.jpg" />
            </div>  
            <div style={{ marginTop: "30px", marginRight: "20px"}}>
                <p>Michelle</p>
                <p style={{ fontSize: "small"}}> Active member since November 2021</p>
            </div>  
            <ul>
                <li className={`${activeTab === TABS.DASHBOARD ? "is-active": ""} `} onClick={() => this.setActiveTab(TABS.DASHBOARD)}>
                <a>
                    <div>
                        <div>
                            <span className={`icon is-small ${activeTab === TABS.DASHBOARD ? "iconActive": ""}`}><i class="fas fa-home" aria-hidden="true"></i></span>
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
                            <span className={`icon is-small ${activeTab === TABS.FRIENDS ? "iconActive": ""}`}><i class="fas fa-user-friends" aria-hidden="true"></i></span>
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