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
import Navbar from '../components/navbar';
const App = () => {
    return (
     <div>  
         <Navbar /> 
          <Switch>
               <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <div className="columns"> 
            <div className="column" />
        <div className="column is-two-thirds">
            <Route exact path='/activities/profile' component={UserFormContainer}></Route>
            <Route exact path='/activities/new' component={CreateActivityFormContainer}></Route>
            <Route exact path='/' component={ActivityIndexContainer}></Route>
        </div>
          <div className="column" />
       
    </div>
      </Switch>
    </div>
    )

};

export default App;