import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import HomePage from "./home_page";
import ActivityIndexContainer from "./activities/activity_index_container"
import { AuthRoute } from "../util/route_util";
import { Route, Switch } from "react-router";
// import { Route, Redirect, withRouter } from 'react-router-dom';


const App = () => (
    <div style={{backgroundColor: 'lightblue'}}>
        <header>
            <h1>Endurance</h1>
        </header>
        <Switch>
            <Route exact path='/' component={ActivityIndexContainer}></Route>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>

);

export default App;