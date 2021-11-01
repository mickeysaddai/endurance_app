import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import HomePage from "./home_page";
import { AuthRoute } from "../util/route_util";
import { Route, Switch } from "react-router";
// import { Route, Redirect, withRouter } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <h1>Endurance</h1>
        </header>
        <Switch>
            <Route exact path = '/'component={HomePage}></Route>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>

);

export default App;