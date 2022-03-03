import React from "react";
import ActivityIndexItem from "./activity_index_item";
import history from "../../util/history";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProfileActivityIndexItem from "../profile/user_activity_index_item";
import SplashPage from "../session_form/splash_page";
class ActivityIndex extends React.Component{
    
    componentDidMount(){
  
        this.props.fetchActivities();

    }
    render(){
        const {activities, userPhoto, loggedIn, createComment, userId, createLike} = this.props;
   
        return (
    
            <>{(this.props.loggedIn) ?
        <div>                
            <div className="columns">

                </div>
                    <div className="column feedColumn">
                    <div className="box feed">
                        <h1>FitnessFeed</h1>
                    </div>
                    {
                        activities.reverse().map((activity, i)=> {
                            

                            return (activity !== undefined && <ActivityIndexItem key={i} activity={activity} userPhoto={userPhoto} createComment={createComment} userId={userId}  createLike={createLike}/>)
                        })
                    }
                </div>
                <div className="column">

                </div>
                 

            </div>
           
            :
         <SplashPage/>}</>
       
        )
    }
}

export default ActivityIndex;