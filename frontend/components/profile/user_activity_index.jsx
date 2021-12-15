import React from "react";
import history from "../../util/history";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProfileActivityIndexItem from "../profile/user_activity_index_item";
import ActivityIndexItem from "../activities/activity_index_item";

class UserActivityIndex extends React.Component{
    
    componentDidMount(){
        if (!this.props.loggedIn) {
            history.push('/#/login')
             window.location.reload() 
        }
        this.props.fetchActivities();
        // this.props.createComment();

    }
    render(){
        const {activities, userPhoto, loggedIn, createComment, userId} = this.props;
        if (!loggedIn) {
             return (
                <Box style={{ margin: "150px"}}>
                <CircularProgress />
                </Box>
            );
        }
        return (
        <div>                
            <div className="columns">
                

                </div>
                    <div className="">
                    <div className="">
                
                    </div>
                    {
                        activities.reverse().map((activity, i)=> {
                            return (activity !== undefined && <ProfileActivityIndexItem key={i} activity={activity} userPhoto={userPhoto} createComment={createComment} userId={userId}/>)
                        })
                    }
                </div>
                {/* <div className="column">

                </div> */}
                 

            </div>
      
        )
    }
}

export default UserActivityIndex;