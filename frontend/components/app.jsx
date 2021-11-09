import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import UserFormContainer from "./profile/user_form_container"
import CreateActivityFormContainer from './activities/create_activity_form_container'
import ActivityIndexContainer from "./activities/activity_index_container"
import { AuthRoute } from "../util/route_util";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import UserForm from "./profile/user_form";
// import { Route, Redirect, withRouter } from 'react-router-dom';


const App = () => {
    console.log("HELLO", window.location.hash)

    return (

    <div >


       
        <Switch>
            <Route exact path='/activities/profile' component={UserFormContainer}></Route>
            <Route exact path='/activities/new' component={CreateActivityFormContainer}></Route>
            <Route exact path='/' component={ActivityIndexContainer}></Route>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>
    )

};

export default App;