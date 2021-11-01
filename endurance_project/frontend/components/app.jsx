import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";


const App = () => (
    <div>
        <header>
            <h1>Endurance</h1>
        </header>
        <AuthRoute path='./login' component={LoginFormContainer} />
        <AuthRoute path='./signup' component={SignUpFormContainer} />
    </div>
);

export default App;