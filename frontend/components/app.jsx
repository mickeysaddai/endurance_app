import React, { useEffect} from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import UserFormContainer from "./profile/user_form_container";
import CreateActivityFormContainer from './activities/create_activity_form_container';
import ActivityIndexContainer from "./activities/activity_index_container";
import EditActivityFormContainer from "./activities/edit_activity_form_container";
import ActivityShowPageContainer from "./activities/activity_show_page_container";
import SplashPageContainer from "./session_form/splash_page_container";
import { AuthRoute, ProtectedRoute} from "../util/route_util";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Navbar from '../components/navbar';
import { connect } from "react-redux";
import { fetchActivities } from "../actions/activity_actions";

const App = ({ fetchActivities}) =>  {
    console.log("logging effect", fetchActivities)
    fetchActivities()
    useEffect(() => {
        console.log("LOGGING EFFECT")
    })

        return (
         <div>  
             <Navbar /> 
              <Switch>
        
                <Route exact path='/' component={SplashPageContainer}></Route>
                <AuthRoute exact path='/login' component={LoginFormContainer} /> 
                <AuthRoute exact path='/signup' component={SignUpFormContainer} /> 
                {/* <AuthRoute path="/" component={SplashPageContainer} />
               
                {/* <AuthRoute exact path='/signup' component={SignUpFormContainer} /> */}
            <div className="columns"> 
                <div className="column" />
            <div className="column is-two-thirds">
                <Route exact path='/activities' component={ActivityIndexContainer}></Route>
                <Route exact path='/activities/profile' component={UserFormContainer}></Route>
                <Route exact path='/activities/new' component={CreateActivityFormContainer}></Route>
                <Route exact path='/activities/edit/:id' component={EditActivityFormContainer}></Route>
                <Route exact path='/show/:id' component={ActivityShowPageContainer}></Route>
                
                
            </div>
              <div className="column" />
           
        </div>
          </Switch>
        </div>
        )
    }


const mapDispatchToProps = (dispatch) => {
    return {
         fetchActivities: () => dispatch(fetchActivities()),
    }

}


export default connect(null, mapDispatchToProps)(App);