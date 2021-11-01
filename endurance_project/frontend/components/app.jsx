import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router";
// import { Route, Redirect, withRouter } from 'react-router-dom';


const App = () => (
    <div>
        {/* <header>
            <h1>Endurance</h1>
        </header> */}
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>

);

export default App;